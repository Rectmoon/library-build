const { BABEL_ENV } = process.env
const cjs = BABEL_ENV === 'commonjs'
const loose = true

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        loose,
        // 默认为false，即为normal模式。
        // 简单地说，就是normal模式转换出来的代码更贴合ES6风格，更严谨；
        // 而loose模式更像我们平时的写法
        modules: false
        // Babel 默认是将ES6模块语法转化为CommonJS规范写法，
        // 配置为modules: false则不转化。
        // 如果使用了 Webpack 且配置为modules:false，Webpack 会进行 tree shaking，去除一些无用代码。
      }
    ]
  ],
  plugins: [
    cjs && ['@babel/transform-modules-commonjs', { loose }],
    [
      '@babel/transform-runtime',
      { useESModules: !cjs, helpers: true, corejs: 3 }
    ]
  ].filter(Boolean)
}
