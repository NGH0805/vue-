const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:"./src/js/main.js",
    output :{
        path:path.resolve(__dirname,"./dist"),
        filename:"buld.js"
    },
    plugins :[
        new htmlWebpackPlugin({
            template:"./src/index.html",
            filename:"index.html",
            inject:"body"
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[
                    {loader:"url-loader",options:{limit:10000}},
                    "image-webpack-loader"
                ]
            },
            {
                test:/\.tpl$/,
                use:[
                    "html-loader"
                ]
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            presets:["es2015"],
                            plugins:["transform-runtime"]
                        }
                    }
                ]
            },
            {
                test:/\.vue$/,
                use:[
                    "vue-loader"
                ]
            }
        ]
    }
}