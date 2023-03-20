// let arrInt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[6]);
// console.log(arr[9]);

// for: dùng để thực hiện những công việc muốn lặp đi lặp lại nhiều lần.
// for (let i = 0; i < arrInt.length; ++i)
// {
//    console.log(arrInt[i]);
// }

// for of: for(let tên biến of tên mảng)
// for(let x of arrInt)
// {
//     console.log(x);
// }

// dùng for tính tổng các số lẻ trong mảng, dùng for of tính tổng các số chẵn trong mảng
// 1, 3, 5, 7, 9
// let tongLe = 0, tongChan = 0;
// for (let i = 0; i < arrInt.length; ++i) 
// {
//     if (arrInt[i] % 2 != 0) tongLe += arrInt[i];
// }
// console.log(tongLe);
// // 2, 4, 6, 8, 10
// for (let x of arrInt) 
// {
//     if (x % 2 == 0) tongChan += x;
// }
// console.log(tongChan);

// khai báo 1 mảng ít nhất 5 phần tử. 5 phần tử là kiểu chuỗi. Nhập vào 1 chuỗi bất kì rồi kiểm tra xem chuỗi đó có trong mảng hay không? Nếu có thì in ra "Không nên làm như thế đâu", còn nếu không có thì thêm tên người đó vào đầu mảng
// let arrName = ["Xuan", "Lan", "Dung", "Van Anh", "Lan Anh"];
// let nameBatKi = prompt("Vui lòng nhập 1 tên: ");

// console.log((arrName.indexOf(nameBatKi)));

// let checkName = 0;

// for (let i = 0; i < arrName.length; ++i) {
//     if(arrName.indexOf(nameBatKi) == i)
//     {
//         checkName = 1;
//         break;
//     }
//     else
//     {
//         checkName = 0;
//     }
// } 
// if(checkName == 1)
// {
//     console.log("Không nên làm như thế đâu");
// }
// else 
// {
//     arrName.unshift(nameBatKi);
// }
// console.log("\n");
// for (let i = 0; i < arrName.length; ++i) {
//     console.log(arrName[i]);
// }

// /*
// let nameCheck = prompt("Nhap ten can kiem tra: ");
// let check = arrName.indexOf(nameCheck);
// if (check < 0)
// {
//     arrName.unshift(nameCheck);
//     console.log(arrName);
// }
// else 
// {
//     console.log("Không nên làm thế đâu!");
// }
// */

// nhập vào 1 tên bất kì kiểm tra xem tên vừa nhập có trong mảng hay không, nếu có thay tên đó thành 1 tên khác còn nếu không có thì hiển thị "Bạn k có nyc là + tên nhập ban đầu"

let arrName = ['Xuan', 'Lan', 'Dung', 'Van Anh', 'Lan Anh'];
console.log(arrName);
let nameBatKi = prompt("Vui lòng nhập 1 tên: ");
let checkName = 0;
let idx = 0;
for (let i = 0; i < arrName.length; ++i) {
    if(arrName.indexOf(nameBatKi) == i)
    {
        checkName = 1;
        idx = i;
        break;
    }
    else
    {
        checkName = 0;
    }
} 

if(checkName == 1)
{
    let nameKhac = prompt("Vui lòng nhập tên khác: ");
    arrName.splice(idx, 1, nameKhac);
    console.log(arrName);
}
else 
{
    console.log("Bạn không có nyc là: " + nameBatKi);
}
