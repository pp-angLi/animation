/*
    drarLine() -- 制作模型
    Show() -- 进行文字的切换
    wordShow() -- 配合Show()进行文字显示
    （Show() 和 wordShow() 分别内置一个计时器，两个计时器分开，对计时器的判定处理会更简单）
    wordDis() -- 文字消失动画
    getStyle(obj, attr)  -- 获取css样式  obj -- 要获取属性的那个对象  attr -- 你要修改的属性（例：width）
    sayLove（） -- I ...... YOU 出现
    doYou（） --   DO YOU？
    Module() -- 移动
    doNext() -- 跪下！
    popo() -- 出泡泡
 */


window.onload = function () {
    Show(0, 0, 30, 'word');
    /*
        第一个参数表示 -- 第1个元素开始；
        第二个参数表示 -- 初始位置；
        第三个参数表示 -- 行间距；
        第四个参数表示 -- 要传入的类名；
    */
    drawLine();
    Module(50, 47, 53, 45, 42, 55, 58,-60);
    popo();
}

var drawLine =  function () {
    var myCanvas = document.getElementById('Mycanvas');

    if(myCanvas.getContext){
        var ctx = myCanvas.getContext('2d');
    }

    /*
        地平线
    */
    ctx.beginPath(); // 开始绘图
    ctx.moveTo(0, 390); // 起始坐标
    ctx.lineTo(400, 390); // 终点坐标
    ctx.lineWidth = 1.0; // 线宽
    ctx.lineCap = 'butt'; // 线条样式
    ctx.lineJoin =  'miter' // 连接样式
    ctx.strokeStyle = '#000' // 设置线的颜色
    ctx.stroke(); // 进行线的着色

    ctx.beginPath(); // 开始绘图
    /*
        男 -- 腿部
    */
    ctx.moveTo(12, 370); // 起始坐标
    ctx.lineTo(12, 390); // 终点坐标
    ctx.moveTo(17, 370); // 起始坐标
    ctx.lineTo(17, 390); // 终点坐标
    /*
        男 -- 手
    */
    ctx.moveTo(4.5, 352); // 起始坐标
    ctx.lineTo(4.5, 372); // 终点坐标
    ctx.moveTo(24.5, 352); // 起始坐标
    ctx.lineTo(24.5, 372); // 终点坐标

    /*
        女 -- 腿部
    */
    ctx.moveTo(385, 370); // 起始坐标
    ctx.lineTo(385, 390); // 终点坐标
    ctx.moveTo(380, 370); // 起始坐标
    ctx.lineTo(380, 390); // 终点坐标
    /*
        女 -- 手
    */
    ctx.moveTo(390, 351); // 起始坐标
    ctx.lineTo(393.75, 360.5); // 终点坐标
    ctx.moveTo(393.75, 360.5); // 起始坐标
    ctx.lineTo(388, 370); // 终点坐标

    ctx.moveTo(375.5, 351); // 起始坐标
    ctx.lineTo(371.75, 360.5); // 终点坐标
    ctx.moveTo(371.75, 360.5); // 起始坐标
    ctx.lineTo(377.5, 370); // 终点坐标

    /*
        填充
    */
    ctx.lineWidth = 3.0; // 线宽
    ctx.lineCap = 'butt'; // 线条样式
    ctx.lineJoin =  'miter' // 连接样式
    ctx.strokeStyle = '#000' // 设置线的颜色
    ctx.stroke(); // 进行线的着色

    /*
        身体 -- 男
    */
    ctx.fillStyle = '#000';
    ctx.fillRect(7, 350, 15, 20);
    /*
        身体 -- 女
    */
    ctx.fillStyle = '#000';
    ctx.fillRect(377.5, 350, 10, 20);

    /*
        头部 -- 男 + 女
    */
    ctx.beginPath();
    ctx.arc(382.5, 344, 5, 0, Math.PI * 2, true);
    ctx.arc(14.5, 344, 5, 0, Math.PI * 2, true);
    ctx.fillStyle = '#000';
    ctx.fill();

    /*
        裙子
    */
    ctx.beginPath(); // 开始绘图
    ctx.moveTo(380, 360); // 起始坐标
    ctx.lineTo(380, 370); // 终点坐标
    ctx.lineTo(370, 370); // 终点坐标

    ctx.moveTo(385, 360); // 起始坐标
    ctx.lineTo(385, 370); // 终点坐标
    ctx.lineTo(395, 370); // 终点坐标
    ctx.fill();
}

var getStyle = function (obj, attr) { // 获取css样式
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj, false)[attr];
    }
}

var Show = function (flag, wordTop, difference, klassName) {
    let Wordtop = difference + wordTop;
    var words = document.getElementsByClassName(klassName);
    var timer = setInterval(function () {
        if(flag == words.length){
            clearInterval(timer);
            return wordDis(klassName);
        }
        else{
            clearInterval(timer);
            return wordShow(flag, Wordtop, difference, klassName);
        }
    }, 500)
}

var wordShow = function (obj, wordTop, difference, klassName) {
    var alt = 0;
    var wTop = 0;
    var words = document.getElementsByClassName(klassName);
    var timer = setInterval(function () {
        words[obj].style.top = wTop + 'px';
        wTop = wordTop / 10 + wTop;
        words[obj].style.opacity = (++alt) / 10;

        if(alt == 10){
            clearInterval(timer);
            obj++;
            return Show(obj, wordTop, difference, klassName);
        }
    }, 50)
}

var wordDis = function (klassName) {
    var Box = document.getElementById('word_box');
    Box.style.borderTop = '1px solid #000';
    var klassName = document.getElementsByClassName(klassName);
    var Deg = 0;
    var timer = setInterval(function () {
        Deg++;
        Box.style.transform = 'rotate(' + Deg + 'deg)';
        Box.style.opacity = (1- Deg / 360);
        if(Deg == 360){
            clearInterval(timer);
            for(var i = 0; i < klassName.length; i++){
                klassName[i].style.display = 'none';
            }
            Box.style.borderTop = 'none';
            Box.style.opacity = 1;

            return sayLove();
        }
    }, 5)
}

var sayLove = function () {
    var myCanvas = document.getElementById('Mycanvas');

    if(myCanvas.getContext){
        var ctx = myCanvas.getContext('2d');
    }
    ctx.beginPath(); // 开始绘图

    var x = 200;
    var y = 200;
    var timerL = setInterval(function () {
    ctx.moveTo(25, ++x);
    ctx.lineTo(25, --y);

    ctx.moveTo(60, x);
    ctx.lineTo(60, y);

    ctx.moveTo(210, x);
    ctx.lineTo(210, y);
    ctx.lineWidth = 3.0;
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = '#000';
    ctx.stroke();
    if(x == 230){
        clearInterval(timerL);
    }
    }, 50)

    var up = 25;
    var down = 25;
    var Line1 = 60;
    var Line2 = 210;
    var w1 = w2 = 175;
    var h1 = h2 = 230;
    var o = Math.PI * 2 / 15;
    var o1 = 1;
    var y1 = y2 = 183;
    var y3 = y4 = 275;
    var l1 = 170;
    var l2 = 215;
    var timer = setInterval(function () {
        Line1 += 2;
        Line2 += 2;

        ctx.moveTo(25, 170);
        ctx.lineTo(++up, 170);
        ctx.moveTo(25, 170);
        ctx.lineTo(--down, 170);

        ctx.moveTo(25, 230);
        ctx.lineTo(up, 230);
        ctx.moveTo(25, 230);
        ctx.lineTo(down, 230);

        ctx.moveTo(60, 230);
        ctx.lineTo(Line1, 230);
        ctx.moveTo(210, 170);
        ctx.lineTo(Line2, 170);
        ctx.moveTo(210, 200);
        ctx.lineTo(Line2, 200);
        ctx.moveTo(210, 230);
        ctx.lineTo(Line2, 230);

        /*  上面是I  */

        w1 -= 1.5;
        w2 += 1.5;
        h1 -= 4;
        ctx.moveTo(175, 230);
        ctx.lineTo(w1, h1);
        ctx.moveTo(175, 230);
        ctx.lineTo(w2, h1);
        ctx.lineWidth = 3.0;
        ctx.lineCap = 'butt';
        ctx.lineJoin = 'miter';
        ctx.strokeStyle = '#000';
        ctx.stroke();

        /* 以上是 I, L, E*/

        ctx.beginPath();
        o1++;
        ctx.arc(115, 200, 25, 0, o * o1 , false);
        ctx.fillStyle = '#000';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(315, 200, 25, 0, o * o1 , false);
        ctx.fillStyle = '#000';
        ctx.stroke();

        /*  上面是o  */

        ctx.beginPath();
        y1--;
        y2 += 3.5;
        y3 -= 1.5;
        y4 += 1.5;
        ctx.moveTo(275, 185);
        ctx.lineTo(y3, y1);
        ctx.moveTo(275, 185);
        ctx.lineTo(y4, y1);
        ctx.moveTo(275, 185);
        ctx.lineTo(275, y2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(370, 215, 17, 0, o * (o1/2) , false);
        ctx.fillStyle = '#000';
        ctx.stroke();

        l1 += 3;
        l2 -= 3;
        ctx.moveTo(353, 170);//
        ctx.lineTo(353, l1);
        ctx.moveTo(387.5, l2);//
        ctx.lineTo(387.5, 215);

        if(up == 40){
            clearInterval(timer);
            doYou();
        }
    }, 100)
}

var doYou = function () {
    var myCanvas = document.getElementById('Mycanvas');

    if(myCanvas.getContext){
        var ctx = myCanvas.getContext('2d');
    }
    var h = 0;
    setTimeout(function () {
        var timer = setInterval(function () {
            h++;
            ctx.clearRect(0,0,h,300);
            if(h == 400){
                clearInterval(timer);
                return (function () {
                    var hh = 0;

                    var timer = setInterval(function () {
                        hh++;
                        document.getElementById('do_you').style.opacity = hh / 10;
                        if(hh == 10){
                            clearInterval(timer);
                        }
                    }, 20)

                })()
            }
        }, 10)
    }, 2000)
}

var Module = function (a,b,c,d,e,f,g,h) {
    var myCanvas = document.getElementById('Mycanvas');

    if(myCanvas.getContext){
        var ctx = myCanvas.getContext('2d');
    }
    var l = 0;
    var timer = setInterval(function () {
        h++;
        l++;
        ctx.clearRect(0,300,h,89);
        if(l%50 == 0){
            clearInterval(timer);
        }
    }, 1);

    setTimeout(function () {
    ctx.beginPath();
    ctx.moveTo(a, 370); // 起始坐标
    ctx.lineTo(b, 390); // 终点坐标

    ctx.moveTo(a, 370); // 起始坐标
    ctx.lineTo(c, 390); // 终点坐标
        /*
            男 -- 手
        */
    ctx.moveTo(d, 352); // 起始坐标
    ctx.lineTo(e, 372); // 终点坐标
    ctx.moveTo(f, 352); // 起始坐标
    ctx.lineTo(g, 372); // 终点坐标

        /*
            填充
        */
    ctx.lineWidth = 3.0; // 线宽
    ctx.lineCap = 'butt'; // 线条样式
    ctx.lineJoin =  'miter' // 连接样式
    ctx.strokeStyle = '#000' // 设置线的颜色
    ctx.stroke(); // 进行线的着色

        /*
            身体 -- 男
        */
    ctx.fillStyle = '#000';
    ctx.fillRect(d, 350, 10, 20);
        /*
            头部 -- 男
        */
    ctx.beginPath();
    ctx.arc(a, 344, 3, 0, Math.PI * 2, true);
    ctx.fillStyle = '#000';
    ctx.fill();
    ctx.stroke();
        a+=50;
        b+=50;
        c+=50;
        d+=50;
        e+=50;
        f+=50;
        g+=50;
        if(a == 400){
            var l = 0;
            var timer = setInterval(function () {
                h++;
                l++;
                ctx.clearRect(0,300,h,89);
                if(l%50 == 0){
                    clearInterval(timer);
                    return doNext(h);
                }
            }, 1)
        }
        else{
            return Module(a,b,c,d,e,f,g,h);
        }
    }, 1000)
}

var doNext = function (h) {

    var myCanvas = document.getElementById('Mycanvas');

    if(myCanvas.getContext){
        var ctx = myCanvas.getContext('2d');
    }

    setTimeout(function () {
        var l = 0;
        var timer = setInterval(function () {
            h++;
            l++;
            ctx.clearRect(0,300,h,89);
            if(l%20 == 0){
                clearInterval(timer);
                ctx.beginPath();
                ctx.moveTo(350, 375); // 起始坐标
                ctx.lineTo(350, 390); // 终点坐标
                ctx.moveTo(350, 390); // 起始坐标
                ctx.lineTo(340, 390); // 终点坐标

                ctx.moveTo(350, 382); // 起始坐标
                ctx.lineTo(360, 382); // 终点坐标
                ctx.moveTo(360, 382); // 起始坐标
                ctx.lineTo(360, 390); // 终点坐标
                                    /*
                                        男 -- 手
                                    */
                ctx.moveTo(350, 367); // 起始坐标
                ctx.lineTo(360, 372); // 终点坐标
                ctx.moveTo(360, 372); // 起始坐标
                ctx.lineTo(370, 367); // 终点坐标

                                    /*
                                        填充
                                    */
                ctx.lineWidth = 3.0; // 线宽
                ctx.lineCap = 'butt'; // 线条样式
                ctx.lineJoin =  'miter' // 连接样式
                ctx.strokeStyle = '#000' // 设置线的颜色
                ctx.stroke(); // 进行线的着色

                                    /*
                                        身体 -- 男
                                    */
                ctx.fillStyle = '#000';
                ctx.fillRect(345, 359, 10, 20);
                                    /*
                                        头部 -- 男
                                    */
                ctx.beginPath();
                ctx.arc(350, 352, 5, 0, Math.PI * 2, true);
                ctx.arc(382.5, 344, 5, 0, Math.PI * 2, true);
                ctx.fillStyle = '#000';
                ctx.fill();


                ctx.clearRect(370,300,30,89);

                ctx.beginPath();
                ctx.arc(382.5, 344, 3, 0, Math.PI * 2, true);
                ctx.fillStyle = '#000';
                ctx.fill();
                /*
                    女 -- 腿部
                */
                ctx.moveTo(382.5, 370); // 起始坐标
                ctx.lineTo(382.5, 390); // 终点坐标
                /*
                    女 -- 手
                */
                ctx.moveTo(380, 354); // 起始坐标
                ctx.lineTo(370, 360); // 终点坐标
                ctx.moveTo(370, 360); // 起始坐标
                ctx.lineTo(377, 347); // 终点坐标
                /*
                    填充
                */
                ctx.stroke(); // 进行线的着色
                /*
                    身体 -- 女
                */
                ctx.fillStyle = '#000';
                ctx.fillRect(377.5, 350, 10, 20);

                ctx.beginPath(); // 开始绘图
                ctx.moveTo(380, 360); // 起始坐标
                ctx.lineTo(380, 370); // 终点坐标
                ctx.lineTo(370, 370); // 终点坐标

                ctx.moveTo(385, 360); // 起始坐标
                ctx.lineTo(385, 370); // 终点坐标
                ctx.lineTo(395, 370); // 终点坐标
                ctx.fill();

                ctx.beginPath();
             }
        }, 1)
    }, 1000)
}

var popo = function () {
    var popoBox = document.getElementById('popo_box');
    popoBox.width = parseInt(getStyle(popoBox,'width'));
    popoBox.height = parseInt(getStyle(popoBox,'height'));

    popoWidth = parseInt(getStyle(popoBox,'width'));
    popoHeight = parseInt(getStyle(popoBox,'height'));

    if(popoBox.getContext){
        var ctx = popoBox.getContext('2d');
    }
    var k = 10;

    var row = {
        r:[],
        g:[],
        b:[],
        radius:[],
        vx:[],
        vy:[],
        weight:[],
        height:[],
    }
    for(var i = 0; i < k; i++){
        row.r[i] = Math.floor(Math.random() * 256);
        row.g[i] = Math.floor(Math.random() * 256);
        row.b[i] = Math.floor(Math.random() * 256);

        row.radius[i] = Math.floor(Math.random() * 45) + 35;
        row.vx[i] = Math.floor(Math.random() * 10) + 5;
        row.vy[i] = Math.floor(Math.random() * 10) + 5;
        row.weight[i] = Math.random() * popoWidth
        row.height[i] = Math.random() * popoHeight

        if(row.weight[i] + row.radius[i] > popoWidth){
            row.weight[i] -= row.radius[i];
        }
        else if(row.weight[i] - row.radius[i] < 0){
            row.weight[i] += row.radius[i];
        }

        if(row.height[i] + row.radius[i] > popoHeight){
            row.height[i] -= row.radius[i];
        }
        else if(row.height[i] - row.radius[i] < 0){
            row.height[i] += row.radius[i];
        }
    }

    for(var i = 0; i < k; i++){
        ctx.beginPath();
        ctx.lineWidth = 1.0;
        ctx.arc(row.weight[i], row.height[i], row.radius[i], 0, Math.PI*2, true);
        ctx.strokeStyle = 'rgb(' + row.r[i] + ',' + row.g[i] + ',' + row.b[i] + ')';
        ctx.stroke();
    }
    var timer = setInterval(function () {
        ctx.clearRect(0, 0, popoWidth, popoHeight);
        for(let i = 0; i < k; i++){
        ctx.beginPath();
        ctx.lineWidth = 1.0;
            if(row.weight[i] + row.vx[i] + row.radius[i] > popoWidth || row.weight[i] + row.vx[i] - row.radius[i] < 0){
                row.vx[i] = -row.vx[i];
            }
            if(row.height[i] + row.vy[i] + row.radius[i] > popoHeight || row.height[i] + row.vy[i] - row.radius[i] < 0){
                row.vy[i] = -row.vy[i];
            }

            row.weight[i] += row.vx[i];
            row.height[i] += row.vy[i];
            ctx.strokeStyle = 'rgb(' + row.r[i] + ',' + row.g[i] + ',' + row.b[i] + ')';
            ctx.arc(row.weight[i] + row.vx[i], row.height[i]+row.vy[i], row.radius[i], 0, Math.PI*2, true);
            ctx.stroke();
        }
    }, 30)
}
