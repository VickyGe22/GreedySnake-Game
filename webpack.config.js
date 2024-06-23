//引入一个包 - 帮助拼接路径
const path = require('path');
//引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
//引入clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //解构赋值

//webpack中所有的配置信息都应该写在module.exports中
module.exports = {

    mode: 'development', //指定打包的模式 - 开发模式 or 生产模式'production'
    //开发：优化构建速度和开发体验。它可以在控制台中实现更详细的输出，并包括热模块替换等功能。当您积极开发应用程序时，这很有用。
    //生产：优化构建以提高性能。这包括最小化代码、优化资产和其他性能改进。当您将应用程序部署到生产时，建议使用此模式

    //指定入口文件 -- 告诉webpack从哪个文件开始执行代码
    entry: './src/index.ts',

    //指定打包文件所在目录 - 把文件输出到指定位置
    output:{
        //指定打包文件所在的目录
        path: path.resolve(__dirname,'dist'),
        //打包后文件的文件名
        filename: 'bundle.js',

        //告诉webpack不使用箭头函数
        environment:{
            arrowFunction: false,
            const: false
        }
    },
    
    //ts需要编译成js - 指定webpack打包时要使用的模块
    module:{
        //指定要加载loader的规则 - rules对应的是数组
        rules:[
            {
                //test指定的是规则生效的文件
                test: /\.ts$/, //匹配所有的ts文件
                //要使用的loader
                use: [
                    //配重babel
                    {
                        //指定加载器
                        loader: 'babel-loader',
                        //设置babel
                        options:{
                            //设置预定义的环境
                            presets:[
                                [
                                    //指定环境的插件
                                    '@babel/preset-env',
                                    //配置信息
                                    {
                                        //要兼容的目标浏览器
                                        targets:{
                                            'chrome':'88',
                                            'ie':'11'
                                        },
                                        //指定corejs的版本
                                        'corejs':'3',
                                        //使用corejs的方式 'usage' 表示按需加载
                                        'useBuiltIns':'usage'
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'], 
                //要排除的文件
                exclude: /node_modules/
            },

            //设置less文件的处理
            {
                test: /\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    //引入postcss
                    {
                        loader: 'postcss-loader',
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        'postcss-preset-env',
                                        {
                                            browsers:'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    'less-loader',//从下往上执行
                ]
            }

        ]
    },

    //配置webpack插件
    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            //title: '自定义title'
            template: './src/index.html'
        }),
    ],

    //用来设置引用模块，哪些文件可以作为模块被其他文件引用
    resolve:{
        extensions:['.ts','.js']
    },

    devtool: 'source-map'

};