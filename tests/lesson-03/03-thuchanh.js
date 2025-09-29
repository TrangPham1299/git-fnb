//function
function sayHello(){
    console.log("Xin chao");
}
sayHello();

//  
function printNum(){
    for( let i = 1; i<=10; i++){
    console.log(i)
    }
}
printNum();
console.log("Xin cHao");
printNum();
console.log("Xin cHao");
printNum();
console.log("Xin cHao");

// returrn value
function getMax(a,b){
    console.log("hẹ hẹ")
    if(a>b){
        return a;
    }else{
        return b;
    }
}
const max = getMax(10,10);
console.log(max);


function getMax1(a,b){
    for( let i = 1; i<5 ; i++){
        if(i<i+1){
            return i+1;
        }else{
            console.log("No content")
        }
    }
    
}
const max1 = getMax1();
console.log(max1);

//trim()
let str ="    Đây là 1 chuỗi có các kí tự trống ở đầu và cuối    ";
console.log(str.trim());

//upper case
let str1 ="meo con luoi hoc";
console.log(str1.toUpperCase());

// Xác định trong biến str1 có chứa text "MEO"
console.log(str1.includes("MEO"));

//thay thế kí tự A -> B
// dùng replaceALL nếu muốn thay thế toàn bộ
console.log(str1.replace("meo", "Mèo"));


//Tách chuỗi: chia thành các mảng
console.log(str1.split(" "));

//substring 
console.log(str1.substring(0,7));   

//indexOf
console.log(str1.indexOf("con")); 

//map
let num =[1,2,3,4,5];
let newNum = num.map(num => num*2);
console.log(newNum);

//Filter
const str2=["đây là 1", "chuỗi và lấy","ra chuỗi thoả mãn","aabbcc123"];
const newstr2 = str2.filter(str2.includes("aabbcc123"));
console.log(newstr2);

//map
let num =[1,2,3,4,5];
let newNum = num.find(num => num%2 === 1);
console.log(newNum);

//filter
const str1 = ["đây là 1", "chuỗi" ,"và lấy", "ra",  "chuỗi", "thỏa mãn" ,"aabbcc123"]; 
const newstr1 =str1.filter(str1 =>str1.includes("chuỗi"));
console.log(newstr1);

//find()
let num = [1,3,4,6]
let newnum = num.find(num => num%2 ===0);
console.log(newnum);