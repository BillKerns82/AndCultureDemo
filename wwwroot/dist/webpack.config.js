var path = require('path');
var HtmlWebPackPlugin = require("html-webpack-plugin");
var Fiber = require('fibers');
module.exports = {
    mode: 'development',
    entry: './Assets/TypeScript/index.js',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                rules: [
                    {
                        test: /\.(s*)css$/,
                        use: ['style-loader', 'css-loader', 'sass-loader']
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./Assets/HtmlTemplates/TestPage.html",
            filename: "../index.html"
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve('wwwroot/dist')
    }
};
//# sourceMappingURL=webpack.config.js.map