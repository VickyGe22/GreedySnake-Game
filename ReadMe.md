# GreedySnack game
Less css, Typscript

# 环境配置搭建
1. tsconfig.json + package.json + webpack.config.js

2. npm i 下载依赖 - node modules创建成功

3. npm run build - 检查是否配置成功

4. 需要处理css: npm i -D less less-loader css-loader style-loader - 下载less相关依赖，预处理css 
- 【修改配置文件webpack.config.js】 - 添加module - 添加rules - 添加test - 添加use - 添加loader - 添加less-loader - 添加css-loader - 添加style-loader - 添加less - 添加

5. 解决css兼容问题：下载 npm i -D postcss-loader postcss-preset-env
- 改配置文件：写在less前面，添加postcss-loader - 添加postcss-preset-env - 添加browserslist - 添加兼容浏览器版本

5. 需要处理图片: npm i -D file-loader url-loader - 下载图片相关依赖
- 【修改配置文件webpack.config.js】 - 添加module - 添加rules - 添加test - 添加use - 添加loader - 添加file-loader - 添加url-loader - 添加options - 添加limit - 添加name - 添加hash - 添加ext - 添加outputPath


