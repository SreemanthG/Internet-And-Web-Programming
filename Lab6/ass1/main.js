    var mytext = document.getElementById("text");
var search = document.getElementById("search");
var output = document.getElementById("output");
var test1 =  "red toyota pick-up truck $500"


var validExpression=/(((red|Red)((\s)[a-z]+){0,2}\s(pickup|pick-up|pick up)\s(truck\s)|((pickup|pick-up|pick up)\s(truck)((\s)[a-z]+){0,2}\s(red)\s))((\s)[az]+(\s))*((\$)([0-9]{1,3})((\,)?([0-9]{3}))*(\.[0-9]{2})?)(\.)?)/;   

search.addEventListener("click",function(){
// var h = validExpression.test(test1)
var s = mytext.value.match(validExpression);
output.innerHTML= "<div>Valid text is<div><div><div style='color:green'>"+s[0]+ "</div>"
})