//click the picture
var minIndex=1, maxIndex=4;
var currentIndex = minIndex;

function prev(){
    if (currentIndex===minIndex){
            currentIndex = maxIndex;
        }else{
            currentIndex--;
        }
    var img2 = document.getElementById('lunbo_img2');
    img2.src = "img/img2-"+currentIndex+".jfif";
}
//
function next(){
    if (currentIndex===maxIndex){
            // 到了最后一张了
            currentIndex = minIndex;
        }else{
            currentIndex++;
        }
        var img2 = document.getElementById('lunbo_img2');
        img2.src = "img/img2-"+currentIndex+".jfif";

}