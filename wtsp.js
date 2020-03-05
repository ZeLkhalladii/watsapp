function send1() {
   var input = document.getElementById("input1");

       var div1 = document.getElementById("msg1");
       var text = document.createElement("p");
       text.setAttribute('class','text1');
       var textnode = document.createTextNode(input.value);
      text.appendChild(textnode);
      div1.appendChild(text);
}

function send2() {
    var input = document.getElementById("input1");
 
        var div1 = document.getElementById("msg1");
        var text = document.createElement("p");
        text.setAttribute('class','text2');
        var textnode = document.createTextNode(input.value);
       text.appendChild(textnode);
       div1.appendChild(text);
 }
