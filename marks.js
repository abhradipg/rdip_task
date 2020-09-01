window.onload = function() {
  var marks = document.querySelectorAll(".second");
  var total_marks = 0;
  var count=0;
  marks.forEach( 
      function(item) 
      {
      total_marks+=parseInt(item.textContent);
      count+=1;
  })
  console.log(total_marks);
  var table=document.getElementsByTagName("tbody");
  var row = document.createElement("TR");
  var col1 = document.createElement("TD");
  var data = document.createTextNode("Total Marks");
  col1.appendChild(data);
  var col2 = document.createElement("TD");
  col2.classList.add("second");
  data = document.createTextNode(total_marks);
  col2.appendChild(data);
  row.appendChild(col1);
  row.appendChild(col2);
  col1 = document.createElement("TD");
  data = document.createTextNode("Average");
  col1.appendChild(data);
  col2 = document.createElement("TD");
  var average=total_marks/count;
  data = document.createTextNode(average);
  col2.appendChild(data);
  col2.classList.add("second");
  table[0].appendChild(row);
  row = document.createElement("TR");
  row.appendChild(col1);
  row.appendChild(col2);  
  table[0].appendChild(row);
}