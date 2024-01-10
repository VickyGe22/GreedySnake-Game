//游戏控制器，控制其他所有类
import Snake from './snake';
import Food from './food';
import ScorePanel from './scorepanel';



class GameControl{
    //定义三个属性
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    //创建一个属性来存储蛇的移动方向(也就是按键的方向)
    direction: string = '';

    //创建一个属性用来记录游戏是否结束
    isLive = true;

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(10,2);
        this.init();//创建对象时调用初始化方法
    }

    //初始化方法，调用后游戏开始
    init(){
        //绑定键盘按键按下的事件
        document.addEventListener('keydown',this.keydownHandler.bind(this)); //bind(this)，将this绑定到调用的第一个对象上
        this.run();
        
    }

    //创建键盘按下的响应函数
    keydownHandler(event: KeyboardEvent){
        //需要检查event.key的值是否合法(用户是否按了正确的按键)
        
        //修改蛇的direction属性
        this.direction = event.key; //event.key返回的是string - 用户按下的按键
        
    }

    //创建一个控制蛇移动的方法
    run(){
        let X = this.snake.X;
        let Y = this.snake.Y;

        //根据按键方向修改X和Y值
        switch(this.direction){
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }

        //检查蛇是否吃到了食物
        this.checkEat(X,Y);

        //修改蛇的X和Y值 - 撞墙检测
        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch(e){
            //进入catch，说明出现了异常，游戏结束，弹出一个提示信息
            alert((e as Error).message + 'GAME OVER!');
            //将isLive设置为false
            this.isLive = false;
        }

        //开启一个定时调用
        this.isLive && setTimeout(this.run.bind(this),100-(this.scorePanel.level-1)*10); //等级越高，速度越快; is.Live为true时才执行setTimeout
    }


    //定义一个方法，用来检查蛇是否吃到了食物
    checkEat(X:number,Y:number){
        if(X === this.food.X && Y === this.food.Y){
            //食物的位置要进行重置
            this.food.change();
            //分数增加
            this.scorePanel.addScore();
            //蛇要增加一节
            this.snake.addBody();
        }
    }

}

export default GameControl;