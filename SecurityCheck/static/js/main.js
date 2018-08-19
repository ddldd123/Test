/*
* @Author: Administrator
* @Date:   2017-05-04 14:12:40
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-21 16:50:34
*/

$(window).on('scroll',function(){
    var st = $(document.body).scrollTop();
    if(st>600){
        $('#toTop').show(400);
    }else{
        $('#toTop').hide(400);
    } 
});


Math.easeout = function (A, B, rate, callback) {
    if (A == B || typeof A != 'number') {
        return;
    }
    B = B || 0;
    rate = rate || 2;
    var step = function () {
        A = A + (B - A) / rate;
        if (A < 1) {
            callback(B, true);
            return;
        }
        callback(A, false);
        requestAnimationFrame(step);    
    };
    step();
};

$('#toTop').click(function(){
    var doc = document.body.scrollTop? document.body : document.documentElement;
    Math.easeout(doc.scrollTop, 0, 4, function (value) {
        doc.scrollTop = value;
    });
});

$(function(){
    // $('.footer').prepend('<h3>长按识别二维码咨询订购</h3><img src="images/footerb.jpg" alt=""><img id="sm" style="margin-top:1em" src="images/mbanner.png" alt="">');
    //$('.footer').prepend('<h3>长按识别二维码咨询订购</h3><img src="http://m.hepulan.com/images/footerb.jpg?xx" alt=""><img id="sm" style="margin-top:1em" src="http://m.hepulan.com/images/zgx_new/shuoming.png" alt="">');

})




