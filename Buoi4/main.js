// nhập vào số dương ktra xem chẵn hay lẻ, dương hay âm
//let num = prompt("Vui long nhập vào số: ");
//var x1 = num % 2 == 0 ? "Đây là số chẵn" : "Đây là số lẻ";
//var x2 = num < 0 ? ", là số âm" : ", là số dương";
//console.log(num + " " + x1 + " " + x2);
// let num = Number(prompt("Vui lòng nhập số: "));
// let checkAmDuong = num > 0 ? "Đây là số dương" : "Đây là số âm";
// let checkChanLe = num % 2 == 0?"Đây là số chẵn" : "Đây là số lẻ";
// console.log(num + ':' + checkAmDuong + " và " + checkChanLe);

// mảng: là 1 tập hợp có tập hợp các phần tử có hoặc không cùng kiểu dữ liệu
// cách khai báo 1 mảng:
// cách 1:
//let arr = ["Java", "JS", "PHP", "C++", 2023];
// cách 2:
//let arr = new Array("Java", "JS", "PHP", "C++", 2023);

// khai báo 1 mảng gồm 10 phần tử là tên các môn
let monHoc = ["Toán", "Văn", "Tiếng anh", "Tiếng nhật", "Thể dục", "Sinh học", "Vật lý", "Địa lý", "Tin học", "GDCD"];
// console.log(monHoc[0]);
// console.log(monHoc[2]);
// console.log(monHoc[3]);
// console.log(monHoc[6]);
// console.log(monHoc[9]);
//console.log(monHoc.length); // lấy độ dài của chuỗi

// thêm, nhiều phần tử vào mảng & trả về độ dài mới của mảng:
// đầu mảng
//console.log(monHoc.unshift("Công nghệ")); 
// cuối mảng:
//monHoc.push("Công nghệ thông tin");

// xóa phần tử:
// cuối mảng & trả về giá trị của phần tử đã xóa:
//monHoc.pop();
// đầu mảng & trả về giá trị của phần tử đã xóa:
//monHoc.shift();

// xóa phần tử theo vitri hoặc chèn thêm vị tri từ x
//monHoc.splice(vitri, tongsophantumuonxoa);
//monHoc.splice(0, 0, "CC");
//monHoc.splice(0, 1, "ĐB");

// cắt 1 phần tử có trong mảng bất kì
//monHoc.slice(vitribatdau, vitriketthuc);

// tìm kiếm
// nếu có thì trả về vị trí đầu tiên nó xuất hiện
//monHoc.indexOf("Văn");
// nếu có thi trả về vị trí cuối cùng:
//monHoc.lastIndexOf("GDCD");

// nối mảng:
//let newList = ["My", "Lien", "Nhi"];
//monHoc.concat(newList);
// monHoc.concat(x, newList); // chèn thêm x vào giữa 2 mảng

// array to string (mặc định các phần tử được ngăn cách bởi dấu ','):
//monHoc.toString();
// ngăn cách bởi x gì đó:
//monHoc.join(" ");

// string to array
let nganhHoc = "Tan gai dai cuong";
nganhHoc.split();
