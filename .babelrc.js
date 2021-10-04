module.exports = {
  presets: ['@babel/preset-env'], // 따로 명시해야하는 js 기능을 한번에 지원해주는 패키지
  plugins: [  // 2차원 배열
    ['@babel/plugin-transform-runtime'] // 비동기처리를 위해 필요한 패키지
  ]
}