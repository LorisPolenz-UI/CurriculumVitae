

var skillsNr = [40, 20, 40, 30, 10, 10];
var skillsName = ["JS", "VB", "Java", "SQL", "Vue", "Angular"];



for (var i = 0; i < skillsNr.length; i++) {

    var circle = document.querySelector('circle.circle' + skillsName[i]);

    var radius = circle.r.baseVal.value;
    var circumference = radius * 2 * Math.PI;


    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    function setProgress(percent) {
        const offset = circumference - percent / 100 * circumference;
        circle.style.strokeDashoffset = offset;
    }

    if (skillsNr[i] < 101 && skillsNr[i] > -1) {
        setProgress(skillsNr[i]);
    }

    
    document.getElementById("skill" + skillsName[i]).innerHTML = skillsNr[i] + "%";
}





