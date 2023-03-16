//var a = 1;
// var a = "Alo";
//let a1 = "Trương Văn Hoàng";
//let a = 3;
// VAR có thể khai báo lại, còn let thì không
// var & let đều có thể gán lại được giá trị

//let a = 2023;
//a = 18;
//console.log(a);

// var - toàn cục, let - cục bộ

// if(1< 2)
// {
//     var a = 2002;
// }
// console.log(a);
// let b = 1108;
// if(11 < 20)
// {
//     let c = 2;
//     if(3 < 5)
//     {
//         let c = 1;
//         console.log(c);
//     }
// }
// console.log(b);

// bài tập: Nhập vào tên, năm sinh, giới tính (nam - 0, nữ - 1)
// kiểm tra xem đủ tuổi đi nghĩa vụ hay không? (tuoi = namhientai - namsinh)
// nếu đủ tuổi thì in Ông.bà có/không đủ tuổi đi nghĩa vụ quân sự

// let ten = prompt("Vui lòng nhập vào tên: ");
// let namSinh = prompt("Vui lòng nhập vào năm sinh: ");
// let gioiTinh1 = prompt("Vui lòng nhập giới tính: ");

// let now = new Date()
// let year = now.getFullYear();
// let namDNV = Number(year) - Number(namSinh);

// console.log("Họ tên: " + ten);
// console.log("Năm sinh: " + namSinh);
// console.log("Giới tính: " + gioiTinh1);

// let x;
// let gioiTinh = Number(gioiTinh1);
// console.log(namDNV);

//if (namDNV > 17 && namDNV < 28) {
//    x = (gioiTinh == 0) ? "Ông đã đủ tuổi đi nghĩa vụ" : "Bà đã đủ tuổi đi nghĩa vụ quân sự";
//}
//else {
//    x = (gioiTinh == 0) ? "Ông đã không đủ tuổi đi nghĩa vụ" : "Bà đã không đủ tuổi đi nghĩa vụ quân sự";//
//}

// let ongBa = gioiTinh == 0 ? "Ông" :"Bà";
// let checkTuoi = namDNV > 17 && namDNV < 28 ? "Đủ" : "Không đủ";
// console.log(`${ongBa} ${ten} ${checkTuoi} tuổi đi nghĩa vụ`);

// các kiểu dữ liệu trong js
// string type
//let chucVu = "Student";
//let hoTen = "Trương Văn Hoàng";
//let maSV = "PH31092";
//console.log(hoTen.length);
//console.log(hoTen.substring(0, 6));
//console.log(hoTen.trim());
//console.log(hoTen.trimStart());
//console.log(chucVu.concat(" ", hoTen).concat(" ", maSV));
//console.log(hoTen.toLocaleLowerCase());
//console.log(hoTen.toLocaleUpperCase());

// number type
let so1 = 11;
let so2 = 1.23456;
console.log(isNaN(so1)); // neu la false thi la so, nguoc lai la chuoi.
console.log(Number.isInteger(so1)); // nếu là trủ thì là số, ngược lại thì không.
console.log(so2.toFixed(3)); // làm tròn đến x số sau dấu phẩy.
console.log(so2.toPrecision(3)); // làm tròn đến phần tử x đến từ phần nguyên.

// BigInt
let = isBigInt = 35472354253645234n;
console.log(isBigInt);

// undefined
let isUnde;
console.log(isUnde); // không có giá trị.

// null
let isNull = null; // giá trị rỗng.
