const path = require('path');   // path package, stored in path const var.
const HtmlWebpackPlugin = require('html-webpack-plugin'),
      MiniCssExtractPlugin = require("mini-css-extract-plugin"),
      HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');

// Render multiple HTML pages
// let htmlPageNames = ['callanswering', 'demodashboard', 'travelblog', 'jatheondash'];
// let multipleHtmlPlugins = htmlPageNames.map(name => {
//   return new HtmlWebpackPlugin({
//     template: `./src/markup/projects/${name}.html`,
//     filename: `projects/${name}.html`,
//     chunks: ['babel', 'study']
//   });
// });

module.exports = {
    entry: {
        babel: '@babel/polyfill', 
        index: './src/js/index.js', 
    },
    output: {
        path: path.resolve(__dirname, 'dist'),   // Outputs bundle to this directory
        filename: 'js/[name].bundle.js'   // with this filename
    },
    devServer: {
        contentBase: './dist',   // live server direction
        open: true,
        port: 8081
    },
    plugins: [
        // MARKUPS
        new HtmlWebpackPlugin({ // Index Page
            filename: 'index.html',
            template: './src/html/index.html',
            chunks: ['babel', 'index']
        }),
        // CSS
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        }),
        // Calling/Activating ExcludeAssets Plugin
        new HtmlWebpackExcludeAssetsPlugin()
    ],
    module: {
        rules: [
            // -- BABEL LOADER --
            {
                test: /\.js$/,  // checks for all possible files that has .js in their name
                exclude: /node_modules/,    // excluding node_modules folder
                use: {
                    loader: 'babel-loader'
                }
            },
            // -- CSS/SCSS LOADER --
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            // -- URL/IMG LOADER --
            {
                test: /\.(png|jpg|jpe?g|gif|jfif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '/img/'
                        }
                    }
                ]
            },
            // IMG/URL LOADER IN HTML
            {
                test: /\.(html|ejs)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', 'link:href', 'img:data-lazy']
                    }
                }
            }
        ]
    }
}