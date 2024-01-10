//定义蛇的类
//单一职责原则，与蛇相关的属性和方法都放在这个类中

class Snake{
    //表示蛇头的元素
    head: HTMLElement;
    //表示蛇的身体(包括蛇头)
    bodies: HTMLCollection; //HTMLCollection是一个类数组，实时更新，可以通过下标访问，也可以通过for of访问
    //获取蛇的容器
    element: HTMLElement;

    constructor(){
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }

    //获取蛇头的坐标
    get X(){
        return this.head.offsetLeft;
    }

    get Y(){
        return this.head.offsetTop;
    }


    //设置蛇头的坐标
    set X(value){
        if(this.X === value){
            return;
        }

        //X的值的合法范围是0-290之间
        if (value < 0 || value > 290){
            //进入判断说明蛇撞墙了
            throw new Error("蛇撞墙了");
        }

        //修改X时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
        //所以需要增加判断
        // if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){ //第二节身体存不存在，第二个身体的值是不等于新值
        //     //如果发生了掉头，让蛇向反方向继续移动
        //     if(value > this.X){
        //         //如果新值value大于旧值X，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
        //         value = this.X - 10;
        //     }else{
        //         value = this.X + 10;
        //     }
        // }


        //移动身体
        this.moveBody();

        //修改蛇头的位置
        this.head.style.left = value + 'px';

        //检查有没有撞到自己
        this.checkHeadBody();
    }

    set Y(value){
        //如果新值和旧值相同，则直接返回不再修改
        if(this.Y === value){
            return;
        }

        if (value < 0 || value > 290){
            //进入判断说明蛇撞墙了
            throw new Error("蛇撞墙了");
        }

        //移动身体
        this.moveBody();

        //修改蛇头的位置
        this.head.style.top = value + 'px';

        //检查有没有撞到自己
        this.checkHeadBody();
    }

    //蛇增加身体的方法
    addBody(){
        //向element中添加一个div
        this.element.insertAdjacentHTML("beforeend","<div></div>");
    }

    //蛇移动的方法
    moveBody(){
        //将后边的身体设置为前边身体的位置：第4节->第3节，第3节->第2节，第2节->第1节
        //遍历获取所有的身体
        for (let i = this.bodies.length -1; i>0; i--){ //i=0是蛇头，不需要移动
            //获取前边身体位置
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            //将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
        
    }

    //检查蛇头是否撞到身体的方法
    checkHeadBody(){
        //获取所有身体，检查其是否和蛇头的坐标发生重叠
        for (let i=1; i<this.bodies.length; i++){
            let bd = this.bodies[i] as HTMLElement;
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                //进入判断说明蛇头撞到了身体，游戏结束
                throw new Error("撞到自己了");
            }
        }
    }
    

}

export default Snake;
