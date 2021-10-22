// Initialization + Declaration
var name = prompt("Enter your name");
var institution = prompt("Enter your institution");
var standard = prompt("Enter your standard");
var english = prompt("Enter your marks of English subject");
var urdu = prompt("Enter your marks of Urdu subject");
var islamiyat = prompt("Enter your marks of Islamiyat subject");
var maths = prompt("Enter your marks of Maths subject");
var science = prompt("Enter your marks of Science subject");
var obtained_marks = parseInt(english) + parseInt(urdu) + parseInt(islamiyat) + parseInt(maths) + parseInt(science);
var percentage = (obtained_marks / 500) * 100;

//Print
document.write("Name: " + name + "<br/>" + "<br/>" );
document.write("Institution: " + institution + "<br/>" + "<br/>" );
document.write("Standard: " + standard + "<br/>" + "<br/>");
document.write("English: " + english + "<br/>" + "<br/>" );
document.write("Urdu: " + urdu + "<br/>" + "<br/>" );
document.write("Islamiyat: " + islamiyat + "<br/>" + "<br/>" );
document.write("Maths: " + maths + "<br/>" + "<br/>" );
document.write("Science: " + science + "<br/>" + "<br/>" );
document.write("Obtained Marks: " + obtained_marks + "<br/>" + "<br/>" );
document.write("Percentage: " + percentage + "%" );


