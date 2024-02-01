
const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); //we need to require() to plugin to create instance of it
//run webpack build it's create automaticly dist folder index.html(comes from options) and budle.js 
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js') //Where bundling start
    },
    output: { 
        path: path.resolve(__dirname, 'dist'),//The output property tells webpack where to emit the bundles it creates and 
        filename: '[name].[contenthash].js',//how to name these files.
               // we use [contenthash] because cache store our bundle.js and when we change something it can use old script(bundle.js)
               // contenthash create someunique string every time create wepback bundle(npm run build) 
               //with this we can pretend this cached bundle problem
        assetModuleFilename: '[name].[ext]', //Bunu eklemeksek assteki img farkli random bi isim alacaktir
        clean: true, //File larin birinde degisiklik yaptigimizda yeni bundle[with new cash] olusur oncekini silmek icin clean kullaniriz
    },
    
    module: { //wepback default olarak js ve json bundle yapar farkli file ile calisacaksak loader kullanmamiz gerekiz
        rules : [
            {
                type: 'asset/resource',
                test: /\.(png|jpe?g|gif)$/i, //'i' for case sensetive
            },
            {
                test: /\.scss$/i, //any file finished with scss apply this loaders
                use: ["style-loader", "css-loader", "sass-loader"] //add <style> element into the <head>
            },
            // { test: /\.txt$/, use: 'raw-loader' } if i want to use txt files to bundle
        ]
    },
    plugins: [ // Easily create HTML files to serve your bundles 
        new HtmlWebpackPlugin(
            {
                title: 'Webpack App',
                filename: "index.html",
                template: "src/template.html"
            } //options
        ),
        new BundleAnalyzerPlugin() //for visilation of bundle.js
    ],
    devtool: 'source-map',
    devServer : { //Provide web server to use in development
        static : {
            directory: path.join(__dirname, 'dist')
        },
        port:3131,
        open:true, //open the index when run build
        hot: true  //for hot reload
    },
    
}




