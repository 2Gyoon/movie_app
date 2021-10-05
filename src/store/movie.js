export default{
  // namespaced :  module화 되어있음을 명시적으로 표현
  namespaced: true,
  // state : data와 같음
  state: () => ({ 
    movies: []
  }),
  // getters :  computed와 같음
  getters: {
    movieIds(state){
      return state.movies.map(m => m.imdbID)
    }
  },
  // mutations : methods와 같음
  // 변이, 다른 컴포넌트에서는 데이터를 수정하는 것이 허용되지 않음(getters, actions 등..)
  mutations: {
    resetMovies(state){
      state.movies = []
    }
  },
  // 비동기
  actions: {
    searchMovies(){

    }
  }
}