function checkno(){
  var number=document.querySelectorAll('input[name="no"]');
  var message=document.getElementById("message");
  message.innerHTML="";
  if(number[0].value>9 && number[0].value<101)
   {
      generate_fibo(number[0].value); 
    }
   else{
   message.innerHTML="Enter number in specified range";
    }
}

function generate_fibo(number){
  var second_last=1;
  var last=1;
  var temp;
  var series=document.getElementById("series");
  series.innerHTML=second_last + "<br>" + last + "<br>";
  var i=3;
  for(;i<number;i++)
   {
      temp=last;
      last+=second_last;
      second_last=temp;
      series.innerHTML+=last + "<br>";
    }
}