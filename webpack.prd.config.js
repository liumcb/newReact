var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        main:'./app/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].bundle.js'
    },
    mode:'production',
    devtool: 'source-map',
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
        new HtmlWebpackPlugin({
            title: 'Main文件',
            filename:'index.html',
            template: './template.html'
        }),// 重新构建html模板
        new CleanWebpackPlugin(), // 自动删除webpack里的打包的目录
        new UglifyJSPlugin()   // 用来对js文件进行压缩，从而减小js文件的大小，加速load速度
    ],
    // 打包公用的组件，创建一个新的common.bundle.js
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 2
                }
            }
        }
    }
};