function button_one_function(){
var a = document.getElementsByTagName('article');
a[0].innerText="The fast-paced field of computer science is dynamic\n" +
    "and ever-evolving as new technology emerges, becomes mainstream,\n" +
    "then shifts yet again. We start with required core classes across computer programming,\n" +
    "operating systems, databases and networking, and computer architecture.\n" +
    "In addition to core IT skills, the program focuses on cloud technologies,\n" +
    "security, networking, scripting, emerging technologies, and server administration.";
}

const button1 = document.getElementById("btn1");
button1.addEventListener('click', button_one_function);

function button_two_function() {
    var t1 = document.getElementsByTagName('table');
    var ln = t1[0].rows.length;
    var element = t1[0].children[1].children;
    for(var i=1;i<ln;i+=2){
        element[i].className="even";
  }
}
const button2 = document.getElementById("btn2");
button2.addEventListener('click', button_two_function);

function button_three_function() {
    var bgm = document.getElementsByClassName('content5');
    bgm[0].style.backgroundColor='green';
}
const button3 = document.getElementById("btn3");
button3.addEventListener('click', button_three_function);
