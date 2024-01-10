//引入样式
import './style/index.less';
// import Snake from './modules/snake';
// import Food from './modules/food';
// import ScorePanel from './modules/scorepanel';

// //测试代码
// const food = new Food();
// console.log(food.X,food.Y);
// food.change();

// const scorePanel = new ScorePanel();
// for (let i = 0; i<100; i++){
//     scorePanel.addScore();
// }

import GameControl from './modules/GameControl';

const gameControl = new GameControl();