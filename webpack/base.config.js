var path = require('path');
let entrypoint = process.env.ENTRYPOINT

module.exports = {
    mode: 'none',
    entry: entrypoint,
    resolve: {
        alias: {
            'translations': path.resolve(__dirname, '..','translations'),
        },
        // extensions: [' ','.js', '.jsx', '.ts', '.tsx', '.css','.scss'],
        // modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: [ require('@babel/plugin-syntax-dynamic-import') ],
                        cacheCompression:true
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader" ,
                    "css-loader" ,
                    "sass-loader"
                ]
            },
            {test: /\.(ico|png|jpg|gif|svg|eot|ttf|woff|woff2)(\?.+)?$/, loader: 'url-loader'}
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    //chunks: 'async',
                    reuseExistingChunk: true
                },
                /*default: {
                    reuseExistingChunk: true
                }*/
            }
        }
    }
}

