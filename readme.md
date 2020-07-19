<h1>Hello Good day!</h1>
<b>Instructions:</b>
<ul>
  <li>Download Xampp or any application to open a Local server</li>
  <li>Open Xampp Control Panel and start Apache</li>
  <li>Download this project</li>
  <li>Locate your Xampp folder and paste the project to htdocs folder</li>
  <li>Access your localhost ex: <b>localhost/mindarc/index.html</b> to open and test the project</li>
</ul>

<b>Note:</b>
Both exercise 1 and 2 are in the same HTML which is the index.html I've applied the fetch API to read the Json file

Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana.
<b>'b' + 'a' + + 'a' + 'a'</b>
will be evaluated as 
<b>('b') + ('a') + (+'a') + ('a')</b>
(+'a') is attempting to convert 'a' to a number using the plus operator and 'a' is not a number and the result will be NaN which stands for Not a Number.
<b>'b' + 'a' + NaN + 'a'</b>
NaN will still have a regular concatenation and applying .toLowerCase() will give result to 'banana'

<br /><br />
<b>That's all thank you and always keep safe!</b>
