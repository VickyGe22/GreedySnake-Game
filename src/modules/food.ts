//定义事物类
class Food{
    //定义一个属性表示食物所对应的元素
    element: HTMLElement;

    constructor(){
        //获取页面中的food元素并将其赋值给element
        this.element = document.getElementById('food')!;//!表示id为food的元素一定存在,不可能为空
    }

    //如果蛇的位置和食物的位置重合,就表示吃到了食物
    //判断蛇头的坐标和食物的坐标是否重合
    //X轴坐标和Y轴坐标

    //获取食物的X轴坐标
    get X(){
        return this.element.offsetLeft; //offsetLeft表示获取当前元素的左边距
    }

    //获取食物的Y轴坐标
    get Y(){
        return this.element.offsetTop; //offsetTop表示获取当前元素的上边距
    } 

    //修改食物的位置
    change(){
        //生成一个随机的位置
        //食物的位置最小是0,最大是290
        //蛇移动一次就是一格,一格的大小就是10,所以要求食物的坐标必须是整10
        let top = Math.round(Math.random()*28)*10;
        let left = Math.round(Math.random()*28)*10;
        this.element.style.left = left + 'px'; //style.是DOM元素的一个属性,表示修改元素的样式
        this.element.style.top = top + 'px';//style.left和style.top表示修改元素的边距
    }

}



export default Food;

//测试代码
// const food = new Food();
// console.log(food.X,food.Y);
// food.change();