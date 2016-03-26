/*To do this successfully, you'll need to:
DONECreate your own Javascript file in the js directory of this project. Call it whatever you want.
 DONEAdd a <script> tag to the page at the bottom that loads your new js file.
In your JS file:
DONEUse document.getElementById() to get the textarea element from the page. You'll need its ID, 
which you can find in the HTML of this page.
DONEWrite an event handler function that runs every time someone types in the textarea. It will look something like this:
myTextareaElement.onkeyup = function(){
    // your code goes here
}
You'll want to access the .value property of the textarea to get the contents of the box as a String
Use String.split() to divide the string (at word boundaries) into an array of Strings
Count the elements in the array. This will be (roughly) the number of words in the box
Write that value into the HTML element that looks like this: <span id="wordcount"></span>
You may notice that this solution as outlined above will not count words correctly if there are extra 
'whitespace' characters in your text.  For this assignment, that's OK. However, if you like, for extra credit (10 points)
design your solution so that extra consecutive whitespaces are not counted.
<p><textarea id="myWordsToCount" rows="5" cols="60"></textarea><br>
      </p>
      The wordcount is: <span id="wordcount"></span><br>
*/

var myWordsToCount = document.getElementById("myWordsToCount");

myWordsToCount.onkeyup = function(){
    // your code goes here
    var x = document.getElementById("myWordsToCount").value;
    var y = [x.split(" ")];
    console.log(y.length);
    document.getElementById("wordcount").innerHTML = y;
}
//document.getElementById("wordcount").innerHTML = myWordsToCount;