let a = 12;
let b = 20;
 
if (a < b)
{
    let tmp = a;
    a = b;
    b = tmp;
    document.writeln("tmp: " + tmp +"<br>");
}
 
document.writeln("a: " + a +"<br>");
document.writeln("b: " + b +"<br>");