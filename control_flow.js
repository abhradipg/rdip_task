function checkno(){
  var number=document.querySelectorAll('input[name="no"]');
  var message=document.getElementById("message");
  message.innerHTML="";
  try{
    if(number[0].value<10)
      throw "too low";
    else if(number[0].value>100)
      throw "too high";
   else{
     generate_fibo(number[0].value); 
    }
   }
   catch(err)
    {
      message.innerHTML=err;
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