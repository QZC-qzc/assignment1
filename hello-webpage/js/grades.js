// the function of grades.html
var names = [];
var scores = [];

var $ = function (id) { return document.getElementById(id); }

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
}

var addScore = function(){
    var name = $("name").value;
    var score = $("score").value;

    names[names.length] = name;
    scores[scores.length] = parseInt(score);
}

var displayScores = function(){
    var html = "<h2>Scores</h2><tr><td><b>Name</b></td><td><b>Score</b></td></tr>"
    for(var i=0;i<scores.length;i++){
        html = html + "<tr><td>"+names[i]+"</td><td>"+scores[i]+"</td></tr>";

    }
    $("scores_table").innerHTML = html;
}

var displayResults = function(){
    var sum = 0;
    var highest_score;
    for(var i=0;i<scores.length;i++){
        sum = sum + scores[i];
        var average = parseFloat(sum) / parseFloat(scores.length);
        if(average > 90 && average<100){
            highest_score = "A";

        }
        else if(average > 80 && average < 89){
            highest_score = "B";

        }
        else if(average > 69 && average < 79){
            highest_score = "C";

        }
        else if(average > 60 && average < 69){
            highest_score = "D";

        }
        else{
            highest_score = "F";

        }
    }


    $("results").innerHTML = "<h2>Results</h2> <p> Average score = "+average+"</p><p>GPA = with a score of "+highest_score+"</p>";

}