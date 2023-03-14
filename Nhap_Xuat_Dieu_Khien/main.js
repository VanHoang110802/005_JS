//var a = prompt("Nhập vào số a: ");
//var b = prompt("Nhập vào số b: ");

// console.log(a);
// console.log(b);

// var tich = a * b;
// console.log(tich);
/*
if (a == 0) {
    if (b == 0) console.log("Phương trình có vô số nghiệm");
    else console.log("Phương trình vô nghiệm");
}
else {
    var x = (-b) / a;
    if (b == 0) console.log("Phương trình có nghiệm:", x = 0);
    else console.log("Phương trình có nghiệm:", x);
}
*/

// var x = (-b) / a;
// if(a == 0 && b == 0)
// {
//     console.log("Phương trình có vô số nghiệm");
// }
// else if(a == 0 && b != 0)
// {
//     console.log("Phương trình vô nghiệm");
// }
// else if(a != 0 && b == 0)
// {
//     console.log("Phương trình có nghiệm:", x = 0);
// }
// else 
// {
//     console.log("Phương trình có nghiệm:", x);
// }

 var canNang = prompt("Vui long nhap so kg: ");
 var chieuCao = prompt("Vui long nhap chieu cao: ");
 var chiSoBMI = canNang / (chieuCao * chieuCao);

if(chiSoBMI < 18.5)
{
    console.log("Ban qua gay roi :(, an nhieu them di ");
}
else if(chiSoBMI >= 18.5 && chiSoBMI <= 25)
{
    console.log("Qua dep, dang ban rat chuan :) ");
}
else if(chiSoBMI > 25 && chiSoBMI < 30) 
{
    console.log("Ban beo roi :(, an it thoi.");
}
else
{
    console.log("Thoi, qua beo ncl roi :)");
}
