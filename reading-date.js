function printdate(){
  var date=document.querySelectorAll('input[name="date"]');
  var element=document.getElementById("date");
  element.innerHTML=date[0].value;
}