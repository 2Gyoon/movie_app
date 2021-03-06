import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'

const _defaultMessage = 'Search for the movie title!'

export default {
  // namespaced :  module화 되어있음을 명시적으로 표현
  namespaced: true,
  // state : data와 같음
  state: () => ({
    movies: [],
    message: _defaultMessage,
    loading: false,
    theMovie: {}
  }),
  // getters :  computed와 같음
  /*
  getters: {
    movieIds(state){
      return state.movies.map(m => m.imdbID)
    }
  },
  */
  getters: {},
  // mutations : methods와 같음
  // 변이, 다른 컴포넌트에서는 데이터를 수정하는 것이 허용되지 않음(getters, actions 등..)
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    resetMovies(state) {
      state.movies = []
      state.message = _defaultMessage
      state.loading = false
    }
  },
  // 비동기
  actions: {
    async searchMovies({ state, commit }, payload) {
      if (state.loading) {
        return
      }
      commit('updateState', { // commit - mutations를 가져올 수 있음 / dispatch - actions를 가져올 수 있음(하나의 action에서 다른 action을 실행)
        message: '',
        loading: true
      })
      try {
        // Search movies...
        const res = await _fetchMovie({
          ...payload,
          page: 1
        })
        const { Search, totalResults } = res.data
        commit('updateState', {
          movies: _uniqBy(Search, 'imdbID')
        })
        // console.log(totalResults)  268
        // console.log(typeof totalResults) string

        const total = parseInt(totalResults, 10)
        const pageLength = Math.ceil(total / 10)
        // 추가 요청!
        if (pageLength > 1) {
          for (let page = 2; page <= pageLength; page++) {
            if (page > (payload.number / 10)) break
            const res = await _fetchMovie({
              ...payload,
              page: page
            })
            const { Search } = res.data
            commit('updateState', {
              movies: [
                ...state.movies,
                ..._uniqBy(Search, 'imdbID')
              ]
            })
          }
        }
      } catch ({message}) {
        commit('updateState', {
          movies: [],
          message: message
        })
      } finally {
        commit('updateState', {
          loading: false
        })
      }
    },
    async searchMovieWithId({ state, commit }, payload) {
      if (state.loading) return

      commit('updateState', {
        theMovie: {},
        loading: true
      })

      try {
        const res = await _fetchMovie(payload)
        console.log(res.data)
        commit('updateState', {
          theMovie: res.data
        })
      } catch (error) {
        commit('updateState', {
          theMovie: {}
        })
      } finally {
        commit('updateState', {
          loading: false
        })
      }
    }
  }
}


async function _fetchMovie(payload) {
  return await axios.post('/.netlify/functions/movie', payload)
}