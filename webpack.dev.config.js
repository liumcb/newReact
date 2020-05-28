var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main:'./app/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        inline: true,
        port: 3000
    },
    devtool: 'inline-source-map',
    mode:'development',
    module: {
      rules: [
           {
               test: /\.js?$/,
               exclude: /(node_modules|bower_components)/,
               loader: 'babel-loader',
               query: {
                  presets: ['es2015', 'react'],
                  plugins: [
                      ['import', {libraryName: 'antd', style: 'css'}]   //antd需要配置的地方
                  ]
                }
           },
           {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'index文件',
            filename:'index.html',
            template: './app/template.html'
        }),// 重新构建html模板
        new CleanWebpackPlugin()
    ]
};