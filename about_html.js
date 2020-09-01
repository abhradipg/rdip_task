window.onload = function()
  {
     var desc=document.getElementById("description");
     var i;
     var data=desc.innerHTML;
     var wordcount=-1;
     var inword=0;
     var extractedword=" ";
     for(i=0;i<data.length;i++)
      {
          if(inword==0 && data[i]!=" ")
              { 
                 inword=1;
                 wordcount++;
                }
          else if(inword==1 && data[i]==" ")
              {
                 inword=0;
                 }
          if(wordcount==5 || wordcount==7 || wordcount==10 )
              {
                 extractedword+=data[i];
                 }
      }
     console.log(extractedword);
  }