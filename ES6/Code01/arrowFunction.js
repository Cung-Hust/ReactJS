var info = (name, age) => {
    document.writeln("tên: " + name + ", tuổi " + age);
};
 
info('a', '18');
//  ------------------------------------------------------
//  ------------------------------------------------------
//  ------------------------------------------------------
var info2 = () => {
    document.writeln("<br>ten: a, tuoi: 18 <br>")
}

info2();

//  ------------------------------------------------------
//  ------------------------------------------------------
//  ------------------------------------------------------

var domain = ["The let statement allows you to <br>", "declare a variable with block scope <br>", "Read more about let in the JavaScript Let chapter"];
 
domain.map((value, key) => {
    document.write(key + ". ");
    document.write(value.toUpperCase());
});

//  ------------------------------------------------------
//  -------------------------callback() function----------
//  ------------------------------------------------------

var blog = {
    domain : "freetuts.net",
    showWebsite : function (callbackFunction){
        callbackFunction();
    },
    render : function(){
        this.showWebsite((() => {
           document.write("<br>"+ this.domain); // this chính là blog
        }));
    }
};
 
blog.render();

//  ------------------------------------------------------
//  ----------------Destructuring Assignments-------------
//  ------------------------------------------------------

// Array
let date = [19, 10, 2020]
 
// Chuyển ba giá trị vào ba biến d, m, y
let [d, m, y] = date;
 
// In kết quả
document.write("<br>Day: " + d);   // Day: 19
document.write("<br>Month: " + m); // Month: 10
document.write("<br>Year: " + y);  // Year : 2020

//  ------------------------------------------------------
//  ----------------Destructuring Assignments-------------
//  ------------------------------------------------------

let redate = [19, 10, 2020]
 
// Chuyển giá trị thứ 3 vào biến z
let [, , ry] = redate;
 
// In kết quả

document.write("<br>Year: " + ry);  // Year : 2020

//  ------------------------------------------------------
//  ----------------Destructuring Assignments-------------
//  ------------------------------------------------------
// Object
let agdate = {
    day : 10,
    month : 06,
    year : 2016
}
 
// Chuyển ba giá trị vào ba biến
let {day : agd, month : agm, year : agy} = agdate;
 
// In kết quả
console.log("Day: " + agd);
console.log("Month: " + agm);
console.log("Year: " + agy);


//  ------------------------------------------------------
//  ----------------Destructuring Assignments-------------
//  ------------------------------------------------------

// Function
var domains = () => {
    return [
        'freetuts.net',
        'qa.freetuts/net'
    ];
};
 
// Chuyển đổi
let [main, sub] = domains();
 
// In kết quả
console.log(main);
console.log(sub);