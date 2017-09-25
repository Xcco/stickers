const webpack=require('webpack')
const path=require('path')

module.exports={
  entry:path.join(__dirname,'js/apps/index.js'),
  output:{
    path:path.join(__dirname,'../public/javascripts'),
    filename:'index.js'
  },
  resolve: {
      alias: {
          jquery: path.join(__dirname, "js/libs/jquery-2.0.3.min.js"),
          mod: path.join(__dirname, "js/mods"),
          scss: path.join(__dirname, "scss")
      }
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }]
      }]
  },
  plugins: [
      new webpack.ProvidePlugin({
          $: "jquery"
      })
  ]
}
