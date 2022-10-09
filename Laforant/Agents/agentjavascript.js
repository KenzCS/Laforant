$(document).ready(function(){

    var untuknentuinberapapanjangtiapnext = 1000;
    var berapabanyaktiapsubslidesr = $('.sub-slider');
    var total = berapabanyaktiapsubslidesr.length;
    var count = 1;

    $('.next').click(function(){
        if(berapabanyaktiapsubslidesr.children().length===count) {
            berapabanyaktiapsubslidesr.animate({'margin-left' : 0});
            count = 1;
        }
            berapabanyaktiapsubslidesr.animate({'margin-left' : -(count*untuknentuinberapapanjangtiapnext)},1000);
            count = count + 1;
    })

    $('.previous').click(function(){

        if(count===1) {
        }
        else{
            count = count - 1;
            berapabanyaktiapsubslidesr.animate({'margin-left' : 
            untuknentuinberapapanjangtiapnext - (count*untuknentuinberapapanjangtiapnext)},1000);
        }
    })

});