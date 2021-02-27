const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const devMode = process.env.NODE_ENV !== 'production';


let sourceMap;

console.log('Env');
console.log(process.env.NODE_ENV);

if (devMode) {
    sourceMap = 'source-map';
}

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        sourceMap = 'source-map';
    }

    

    return {
        entry: {
            main: './src/index.js'
        },

        devtool: sourceMap,

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js'
        },

        optimization: {
            minimize: argv.mode == 'production'? true: false
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.(html)$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            minimize: false
                        }
                    }
                },
                {
                    test: /\.(png|jpe?g|gif|svg|ico)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '/images/[name].[ext]',
                            }
                        }
                    ],
                },

                {
                    test: /\.s?css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'resolve-url-loader',
                        'sass-loader'
                    ],

                },

                {
                    test: /\.html$/,
                    use: ["html-loader","ejs-loader"]
                },
                {
                    test: /\.ejs$/,
                    loader: 'ejs-loader',
                }


            ]
        },

        plugins: [
            
            new HtmlWebpackPlugin({
               // template: "./src/views/index.ejs"
                filename: "./index.html"
            }),

            // Include JQuery Plugin
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),

            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: '[name].css',
                chunkFilename: '[id].css',
            }),

            new CopyWebpackPlugin([
                {
                    from: './src/images',
                    to: './images'
                }, {
                    from: './src/fonts',
                    to: './fonts'
                }
            ]),

            new BrowserSyncPlugin({

                port: 3300,

                files: [
                    '**/*.ejs', '**/*.*'
                ]
            }, {
                // prevent BrowserSync from reloading the page
                // and let Webpack Dev Server take care of this
                reload: false
            })


        ]
    };
};