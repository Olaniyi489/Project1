function ageInDays(){
    var birthYear = prompt('what year were you born nigga?');
    var ageInDayss = (2021- birthYear) * 365;
    var h3 = document.createElement('h3');
    var textAnswer = document.createTextNode ('you are ' + ageInDayss + ' days old' );
    h3.setAttribute('id', 'ageInDays');
    h3.appendChild(textAnswer);
    document.getElementById('container4').appendChild(h3);
}


function reset(){
    document.getElementById('ageInDays').remove();
}