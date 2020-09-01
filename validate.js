function validateform() {
  var reason = document.querySelectorAll('input[name="subject"]');
  var valid = false;
  reason.forEach( function(item){
    if (item.checked==true)
       { valid = true;}
  })
  if(valid);
  else
  {alert("enter subject");
  return false;}
}