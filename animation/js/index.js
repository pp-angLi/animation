/*
    createLine (x1,y1,x2,y2,lineWidth,lineCap,lineJoin,strokeStyle) -- 绘制一条直线
    {
        x1, y1 -- 起点横纵坐标
        x1, y2 -- 终点横纵坐标
        lineWidth -- 线宽 --   默认为1.0
        lineCap -- 端点样式 'butt'，'round'，'square'   默认'butt'
        lineJoin -- 线段样式 'miter'，'bevel'，'round'   默认'miter'
        strokeStyle -- 线条颜色 如'#000'，'rgb（1,2,3）'......    默认'#000'
    }
    createCircle (x,y,r,fs,startAngle,endAngle,anticlockwise,co,lineWidth) -- 绘制圆形
    {
        x,y -- 圆点坐标
        r -- 半径
        fs -- 是否填充 (1/0)  默认0 -- 不填充
        startAngle -- 初始角度   默认0
        endAngle -- 终点角度   默认Math.PI * 2
        anticlockwise -- 逆时针画（true）还是顺时针画（false）   默认false
        co -- 颜色   默认'#000'
        lineWidth -- 线宽   如'#000'，'rgb（1,2,3）'......    默认1.0
    }
    createRactangle (fs,x,y,weight,height,lineWidth,co) -- 绘制长方形
    {
        x,y -- 左上点
        weight,height -- 宽高
        lineWidth -- 线宽 默认 1.0
        fs -- 是否填充 (1/0)  默认0 -- 不填充
        co -- 颜色  如'#000'，'rgb（1,2,3）'......     默认'#000'
    }
 */
window.onload = function () {
    createLine(0,399,800,399,1.0); // 底线

    animationGo.busGo(215,270,185,300,210,275,350,390,10,1,2.0);
    //
    animationGo.manGo(145,140,143,142,137,146,147,150,159);

}
var createLine = function (x1,y1,x2,y2,lineWidth,lineCap,lineJoin,strokeStyle) {
    var canvas = document.getElementById('my_canvas');
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');
    }
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);

    ctx.lineWidth = lineWidth || 1.0;
    ctx.lineCap = lineCap || 'butt'; // 端点样式 butt, round, square
    ctx.lineJoin = lineJoin || 'miter'; // 连接样式 miter, bevel, round
    ctx.strokeStyle = strokeStyle || '#000';
    ctx.stroke();
}

var createCircle = function (x,y,r,fs,startAngle,endAngle,anticlockwise,co,lineWidth) {
    var canvas = document.getElementById('my_canvas');
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');
    }
    ctx.beginPath();
    var tf = anticlockwise || false;
    var one = startAngle || 0;
    var two = endAngle || Math.PI * 2
    var fs = fs || 0;
    ctx.arc(x,y,r,one,two,tf);

    if(fs){
        ctx.fillStyle = co || '#000';
        ctx.fill();
    }
    else{
        ctx.lineWidth = lineWidth || 1.0;
        ctx.strokeStyle = co || '#000';
        ctx.stroke();
    }
}

var createRactangle = function (fs,x,y,weight,height,lineWidth,co) {
    var canvas = document.getElementById('my_canvas');
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');
    }
    ctx.beginPath();
    var fs = fs || 0;
    if(fs){
        ctx.fillStyle = co || '#000';
        ctx.fillRect(x, y, weight, height);
    }
    else{
        ctx.lineWidth = lineWidth || 1.0;
        ctx.strokeStyle = co || '#000';
        ctx.strokeRect(x, y, weight, height);
    }
}

var animationGo = (function () {
    var canvas = document.getElementById('my_canvas');
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');
    }

    var busMake = function (x1,x2,x3,x4,x5,x6,y1,y2,r,fs,lineWidth) {
        createLine(x1, y1, x3, y2, lineWidth);
        createLine(x2, y1, x4, y2, lineWidth);

        createLine(x3, y2, x5, y2, lineWidth);
        createLine(x5, y2, x6, y2, lineWidth);

        createLine(x1, y1, x2, y1, lineWidth);
        createLine(x4, y2, x6, y2, lineWidth);

        createCircle(x5, y2, r, fs);
        createCircle(x6, y2, r, fs);
    }

    var manMake = function (x1,x2,x3,x4,x5,x6,x7,x8,x9,y1,y2,y3,y4,y5,y6,y7,y8,y9,r,lineWidth,fs,weight,height) {
            var x1 = x1 || 145, x2 = x2 || 140, x3 = x3 || 143, x4 = x4 || 142, x5 = x5 || 137, x6 = x6 || 146, x7 = x7 || 147, x8 = x8 || 150, x9 = x9 || 159;
            var y1 = y1 || 358, y2 = y2 || 365, y3 = y3 || 380, y4 = y4 || 388, y5 = y5 || 394, y6 = y6 || 372, y7 = y7 || 380, y9 = y9 || 360, y8 = y8 || 399;
            var r = r || 4, fs = fs || 1, weight = weight || 10, height = height || 15, lineWidth = lineWidth || 2.0;

            if(flag == 1){
                    createLine(x1,y6,x1,399, lineWidth);

                    createCircle(x1,y1,r,fs);

                    createLine(x6,y6,x9,y9, lineWidth);

                    createRactangle(fs,x2,y2,weight,height);

                    var k = 0;
                    var timer = setInterval(function () {
                        k++;
                        ctx.clearRect(0, 0, 800, 400);

                        createLine(0,399,800,399,1.0); // 底线

                        createLine(x1,y6,x1,399, lineWidth);

                        createCircle(x1,y1,r,fs);

                        createLine(x6,y6,x6 + 10,y6 - 6, lineWidth);
                        createLine(x6 + 10,y6 - 6,x6 + 10 - k,y9, lineWidth);

                        createRactangle(fs,x2,y2,weight,height);
                        if(k == 5){
                            clearInterval(timer);
                            return saySomething(0);
                        }
                    }, 50)
            }

            else{
                if(x1 % 2 == 0){
                    // createLine(150,399,147,380, lineWidth);
                    createLine(x8,y8,x7,y7,lineWidth);

                    // createLine(143,380,142,388, lineWidth);
                    // createLine(142,388,137,394, lineWidth);
                    createLine(x3,y3,x4,y4, lineWidth);
                    createLine(x4,y4,x5,y5, lineWidth);
                }
                else{
                    createLine(x1,y6,x1,399, lineWidth);
                }


                // createLine(146,372,159,360, lineWidth);
                createLine(x6,y6,x9,y9, lineWidth);

                // createCircle(145,358,4,1);
                createCircle(x1,y1,r,fs)

                // createRactangle(1,140,365, 10, 15);
                createRactangle(fs,x2,y2,weight,height);
            }
    }

    var vx = 15;

    var flag = 0;

    var timerBus;
    var timerMan;

    var busGo = function (x1,x2,x3,x4,x5,x6,y1,y2,r,fs,lineWidth) {
        timerBus = setInterval(function () {
            ctx.clearRect(0, 0, 800, 400);
            createLine(0,399,800,399,1.0); // 底线
            x1 += vx;
            x2 += vx;
            x3 += vx;
            x4 += vx;
            x5 += vx;
            x6 += vx;

            if(x3 >= 800){
                clearInterval(timerBus);
                flag = 1;
                return manGo;
            }

            busMake(x1,x2,x3,x4,x5,x6,y1,y2,r,fs,lineWidth);
        }, 100)
    }

    var vxx = 5;
    var manGo = function (x1,x2,x3,x4,x5,x6,x7,x8,x9) {
        timerMan = setInterval(function () {
            // ctx.clearRect(0, 0, 800, 400);
            createLine(0,399,800,399,1.0); // 底线
            x1 += vxx;
            x2 += vxx;
            x3 += vxx;
            x4 += vxx;
            x5 += vxx;
            x6 += vxx;
            x7 += vxx;
            x8 += vxx;
            x9 += vxx;

            if(flag){
                clearInterval(timerMan);
                return manMake(x1,x2,x3,x4,x5,x6,x7,x8,x9);
            }

            manMake(x1,x2,x3,x4,x5,x6,x7,x8,x9);
        }, 100)
    }

    return {
        busGo:busGo,
        manGo:manGo
    }
})();

var saySomething = function (i) {
    var box = document.getElementsByClassName('words_box');
    var i = 0 || i;

    var k = 0;
    if(i == 3){

    }
    else{
        var timer = setInterval(function () {
            box[i].style.opacity = (++k) / 10;
            if(k == 10){
                clearInterval(timer);
                if(i == box.length - 1){
                    return allEnd();
                }
                else{
                    return clearSay(i);
                }
            }
        }, 100)
    }
}
var clearSay = function (i) {
    var k = 10;
    var box = document.getElementsByClassName('words_box');
    var timer = setInterval(function () {
        box[i].style.opacity = (--k) / 10;
        if(k == 0){
            clearInterval(timer);
            return saySomething(++i)
        }
    }, 100)
}

var allEnd = function () {
    var box1 = document.getElementById('canvas_box');
    var box2 = document.getElementById('do_end');

    var box1L = parseInt(getStyle(box1, 'left'));
    var box2L = parseInt(getStyle(box2, 'height'));

    var long = 10
    var k = 10;
    var j = 0;

    setTimeout(function () {
        var timer = setInterval(function () {
            box1L += long;
            box1.style.left = box1L + 'px';

            box1.style.opacity = --k / 10;


            if(k == 0){
                clearInterval(timer);
                var t = setInterval(function () {
                    box2.style.opacity = ++j / 10;
                    if(j == 10){
                        clearInterval(t);
                    }
                }, 100)
            }

        }, 100)
    }, 1000)
}

var getStyle = function (obj, attr) {
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj, false)[attr];
    }
}