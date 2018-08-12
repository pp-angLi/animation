(function () {
    var x = document.getElementById('get_wao');
    var y = 0;
    var l = Math.ceil(Math.random() * 900 - 1);
    var cool = 1;
    var timer = setInterval(function () {

        if(y < l){
            y += cool;
        }
        else if(y > l){
            y -= cool;
        }
        else{
            l = Math.ceil(Math.random() * 900 - 1);
        }
        x.style.left = y + 'px';
        // console.log(x.style.left + ',' + l)

    }, 5)
    var r,g,b;
    var timer2 = setInterval(function () {
        r = Math.ceil(Math.random() * 256 - 1);
        g = Math.ceil(Math.random() * 256 - 1);
        b = Math.ceil(Math.random() * 256 - 1);
        x.style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
        // console.log(r + ',' + g + ',' + b);
    }, 500)
    var k = Math.ceil(Math.random() * 451 - 1);
    var j = 0;
    var so = 1;
    var timer3 = setInterval(function () {
        if(j < k){
            j += so;
        }
        else if(j > k){
            j -= so;
        }
        else{
            k = Math.ceil(Math.random() * 451 - 1);
        }
        x.style.top = j + 'px';
        // console.log(x.style.top + ',' + k)
    }, 10)
})()


/*

知识点1

*/
var doSomething = (function () {
    var makeSth = function (x) {
        console.log(x);
        makeSth = null;
        if(makeSth){
            return makeSth(x++)
        }
        else{
            return makeSth(x+=2)
        }
    }
    var doSth = function () {
        console.log(2);
    }

    return {
        makeSth : makeSth,
        doSth : doSth
    }
})()

doSomething.makeSth(1);
doSomething.doSth();
doSomething.makeSth(2);


/*

知识点2

*/
function aFunc(num){
    if(num <= 1){
        return 1;
    }
    else{
        return num * arguments.callee(num--);
    }
}//callee 是属于arguments 的指针，指向拥有该arguments的函数
// arguments 是一个数组，包含该函数的所有传入的参数