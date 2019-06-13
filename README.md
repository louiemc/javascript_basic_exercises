# javascript_basic_exercises
Basic Javascript exercises! Check out the README below to see the gifs/screenshots of the solutions

## Exercise 1: Write a Javascript program to display the current day and time in the following format [dateAndTime folder]
**Expected Result**
Today is: Tuesday
Current time is: 10 PM : 30 : 38

This is the Javscript file screenshot (easier to see the work and results). Comments are just little notes I wrote mainly for myself.
![JS code for dateAndTime](./images/dateAndTime.png)
This is the result of the console.log's in the code
![Output in console for dateAndTime](./images/dateAndTime2.png)

## Exercise 2: Write a Javascript program to print the contents of the current window [printWindow folder]
**Follow the screenshots and gifs to see what the process is!**

Here is the HTML page with a h1 tag and a p tag. I commented out the script tag because I wanted to see what the window would look like without JS code running.
![HTML code without script tag](./images/printWindow1.png)
![HTML page without JS code](./images/printWindow2.png)

Here the <script></script> tag is uncommented from the html file. In the JS file you'll see the simple code, which opens the Print Dialog to print the current document
![HTML page with script tag](./images/printWindow3.png)
![JS for HTML file](./images/printWindow3a.png)
This is what the browser looks like when the page loads (and reloads). The print dialog pops up to print the current window
![Browser with HTML and JS files](./images/printWindow4.png)

But what if I don't want the print dialog to pop up when I load/reload the page? I can add a button!
![Adding a button with an onclick function specifically for the button](./images/printWindow5a.png)
![JS file: wrapping the window.print inside the function](./images/printWindow5.png)
![Gif of end result](https://media.giphy.com/media/ftd3PTUmfgrX0mgMSf/giphy.gif)

## Exercise 3: Write a Javascript program to get the current date [currentDate folder]
**Expected Result**
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

Here is the Javascript code and the process of how I came to figure this out. I definitely have a better feel of the date methods after this exercise. It's all about practice!
![JS file ](./images/currentdate1.png)
This is the result in the console. I left the other console.log's uncommented because I wanted to see what each variable was after the if statements
![Console that has the results of the code compiled](./images/currentdate2.png)

## Exercise 4: Write a Javascript program to find the area of a triangle where the lengths of the three of its sides are 5,6,7 [triangle folder]
If you're like me and you forgot math (face palming myself), google it. I found some sites that would calculate the area, but how could I program it to do it for me? 

Then I found 'Heron's Formula.' 

It's a method for calculating the area of a triangle when you know the lengths of all three sides! 

Let a,b,c be the lengths of the sides of the triangle. The area is given by: Area = sqrt(p(p-a)(p-b)(p-c)) where p is half the perimeter, (a+b+c)/2

Here is the Javascript code with some comments on how I thought through this exercise:
![JS code for triangle exercise](./images/traingle1.png)

Here is the console where I console.log-ged the results:
![Console that has the results of my console.log-s](./images/triangle2.png)