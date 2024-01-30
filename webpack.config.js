
const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); //we need to require() to plugin to create instance of it
//run webpack build it's create automaticly dist folder index.html(comes from options) and budle.js 


module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js') //Where bundling start
    },
    output: { 
        path: path.resolve(__dirname, 'dist'),//The output property tells webpack where to emit the bundles it creates and 
        filename: '[name].js'//how to name these files.
    },
    
    module: { //wepback default olarak js ve json bundle yapar farkli file ile calisacaksak loader kullanmamiz gerekiz
        rules : [
            {
                test: /\.scss$/i, //any file finished with scss apply this loaders
                use: ["style-loader", "css-loader", "sass-loader"]
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
        )
    ]
}

//  Creates `style` nodes from JS strings
// "style-loader",
//  Translates CSS into CommonJS
// "css-loader",
//  Compiles Sass to CSS
// "sass-loader",


