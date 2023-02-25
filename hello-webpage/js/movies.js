// lunbo_img
var index=1;
function lunbo(){
    index++;
     //index > 5
    if(index > 5){
        index = 1;
    }
    //获取img对象
    var img = document.getElementById('lunbo_img');
    img.src = "img/img"+index+".jfif";

}
setInterval(lunbo,1000);
