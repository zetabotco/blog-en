const merge = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",

  output: {
    filename: "en/blog/[name].[hash:5].js",
    chunkFilename: "en/blog/[id].[hash:5].css"
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        exclude: /\/node_modules\//,
      }),
      new MiniCssExtractPlugin({
        filename: "en/blog/[name].[hash:5].css",
        chunkFilename: "en/blog/[id].[hash:5].css"
      }),
      new OptimizeCSSAssetsPlugin({}),
    ]
  }
});
