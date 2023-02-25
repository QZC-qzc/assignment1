var btn = document.getElementById('btn');
btn.onclick = function () {
    var txt = document.getElementById('txt').value;
    var pwd = document.getElementById('pwd').value;
    console.log(txt,pwd);
    if (txt==13554171550 && pwd=='qzc981209'){
        alert('correct');
        window.open("index.html");
    }
    else{
        alert('incorrect');
    }
}



