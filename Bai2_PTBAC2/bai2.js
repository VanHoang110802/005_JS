/*
 4, -2, -6 -->>  -1   1.5
 2, -7,  3 -->>  0.5  3
 3,  2,  5 -->>  2
 1, –4,  4 -->>  2
*/

var a = prompt("Nhập a = ");
var b = prompt("Nhập b = ");
var c = prompt("Nhập c = ");
var x1, x2;
var delta = b * b - 4 * a * c;

if (a == 0) //giai phuong trinh bac nhat bx + c = 0
{
    if (b == 0) 
    {
        if (c == 0) 
        {
            console.log("Phương trình có vô số nghiệm");
        }
        else 
        {
            console.log("Phương trình vô nghiệm");
        }
    }
    else if (b > 0) 
    {
        console.log((-c) / b);
    }
    else if (b < 0) 
    {
        if (c == 0) 
        {
            b = Math.abs(b);
            console.log((-c) / b);
        }
        else if (c != 0)
        {
            console.log((-c) / b);
        }
    }
}
else // a != 0 => Giai pt ax2 + bx + c = 0
{
    if (delta > 0) 
    {
        x1 = ((-b - Math.sqrt(delta)) / (2 * a));
        x2 = ((-b + Math.sqrt(delta)) / (2 * a));
        if (x1 < x2) 
        {
            console.log(x1 + " " + x2);
        }
        else 
        {
            console.log(x2 + " " + x1);
        }
    }
    else if (delta < 0) 
    {
        console.log("Phương trình vô nghiệm");
    }
    else 
    {
        console.log((-b) / (2 * a));
    }
}
