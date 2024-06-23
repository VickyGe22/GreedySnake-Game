# GreedySnack game
deploy on vercel
https://greedy-snake-game.vercel.app/

# tech stack
Less css, Typscript
npm start


# Env build
1. tsconfig.json + package.json + webpack.config.js

2. npm i  - node modules

3. npm run build - check config

4. css: npm i -D less less-loader css-loader style-loader - download less and css dependencied
- 【modify in webpack.config.js】 - add module - rules - test - use - loader - less-loader - css-loader - style-loader - less

5. solve css resolution problems： npm i -D postcss-loader postcss-preset-env
- modify config：before less，add postcss-loader - postcss-preset-env - browserslist - add chrome version

6. handle pic: npm i -D file-loader url-loader - add pic related dependencies
- 【modify in webpack.config.js】 - add module -rules -test -use -loader -file-loader -url-loader -options -limit -name -hash -ext -outputPath


