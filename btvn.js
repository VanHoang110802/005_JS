// nhập vào 1 tên bất kỳ
// kiểm tra nếu tên đó đã có thì in ra vị trí của tên đó
// kiểm tra nếu chưa có thì thông báo chưa có tên đó

// nhập vào 1 tên bất kỳ
// kiểm tra nếu tên đó đã có thì xóa cái tên đó ra khỏi mảng
// kiểm tra nếu chưa có thì thông báo ko có tên nyc là + tên

// Khai báo 1 hàm là dienTich để tính diện tích hình chữ nhật
// y/c: nhập chiều dai và chiều rộng
// Giải bằng 2 cách có tham số và không có tham số

/*
let arrName = ["Hoàng", "Duy", "Hiếu", "Toàn", "Hùng", "Quyết"];
console.log(arrName);
let inputName = prompt("Vui lòng nhập tên: ");
let checkName = 0;
for (let i = 0; i < arrName.length; ++i) 
{
    if (arrName.indexOf(inputName) == i) 
    {
        checkName = 1;
        console.log("Tên " + inputName + " nằm ở vị trí: " + (i + 1));
        break;
    }
}
if (checkName == 0) {
    console.log("Tên " + inputName + " chưa có!");
}
*/

/*
let arrName = ['Xuân', 'Lan', 'Dung', 'Vân Anh', 'Lan Anh'];
console.log(arrName);
let inputName = prompt("Vui lòng nhập tên: ");
let checkName = 0;
for (let i = 0; i < arrName.length; ++i) 
{
    if (arrName.indexOf(inputName) == i) 
    {
        checkName = 1;
        arrName.splice(i, 1);
        console.log(arrName);
        break;
    }
}
if (checkName == 0) 
{
    console.log("Không có người nào mang tên là: " + inputName);
}
*/

/*
let chieuDai = Number(prompt("Vui lòng nhập chiều dài"));
let chieuRong;
while (true)
{
    chieuRong = Number(prompt("Vui lòng nhập chiều rộng"));
    if(chieuRong > chieuDai)
    {
        alert("Chiều rộng nhập không hợp lệ!");
    }
    else 
        break;
}

function TinhDienTich(chieuDai, chieuRong)
{
    return Number(chieuDai * chieuRong);
}
console.log(TinhDienTich(chieuDai, chieuRong));
*/

/*
function TinhDienTich() 
{
    let chieuDai = Number(prompt("Vui lòng nhập chiều dài"));
    let chieuRong;
    while (true) 
    {
        chieuRong = Number(prompt("Vui lòng nhập chiều rộng"));
        if (chieuRong > chieuDai) 
        {
            alert("Chiều rộng nhập không hợp lệ!");
        }
        else
            break;
    }
    console.log(chieuDai * chieuRong);
}
TinhDienTich();
*/

/*
function TinhDienTich() 
{
    let chieuDai = Number(prompt("Vui lòng nhập chiều dài"));
    let chieuRong;
    while (true) 
    {
        chieuRong = Number(prompt("Vui lòng nhập chiều rộng"));
        if (chieuRong > chieuDai) 
        {
            alert("Chiều rộng nhập không hợp lệ!");
        }
        else
            break;
    }
    return Number(chieuDai * chieuRong);
}
console.log(TinhDienTich());
*/

let chieuDai = Number(prompt("Vui lòng nhập chiều dài"));
let chieuRong;
while (true)
{
    chieuRong = Number(prompt("Vui lòng nhập chiều rộng"));
    if(chieuRong > chieuDai)
    {
        alert("Chiều rộng nhập không hợp lệ!");
    }
    else 
        break;
}

function TinhDienTich(chieuDai, chieuRong)
{
    console.log(chieuDai * chieuRong);
}
TinhDienTich(chieuDai, chieuRong);
