//定义记分牌类
class ScorePanel{
    //定义三个属性
    score = 0; //分数
    level = 1; //等级
    scoreEle: HTMLElement; //分数和等级所在的元素
    levelEle: HTMLElement;

    // //设置一个变量限制等级
    maxLevel: number;
    // //设置一个变量表示多少分时升级
    upScore: number;

    constructor(maxLevel: number = 10,upScore: number = 10){
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    //设置一个加分的方法
    addScore(){
        //分数自增
        //this.score++;
        this.scoreEle.innerHTML = ++this.score + ''; //.innerHTML表示获取元素的内容
        // //判断分数是多少
        if(this.score % this.upScore === 0){
            this.levelUp();
        }
    }

    //提升等级的方法
    levelUp(){
        //最高等级是10
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

// const scorePanel = new ScorePanel();
// for (let i = 0; i<100; i++){
//     scorePanel.addScore();
// }

export default ScorePanel;

