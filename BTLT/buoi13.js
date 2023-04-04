
// swal({
//     title: "Hoàng đẹp trai vc",
//     icon: "info", 
//     buttons: [{
//          text: "Cancel", 
//          value: null,
//         }, 
//         {
//             text: "Ok", 
//             value: true,
//         }],
// })

let arrLuuTru = ["", "" , "", "" , ""]; 

function myButtonTest()
{
    let arr = document.getElementsByTagName('input');
    let name = arr[0].value;
    let sdt = arr[1].value;
    let mail = arr[2].value;
    let sex = "";

    //console.log(arr);
    //console.log(name);
    //console.log(sdt);
    //console.log(mail);
    if(arr[3].checked)
    {
        sex = arr[3].value;
        //console.log(sex);
    }
    else 
    {
        sex = arr[4].value;
        //console.log(sex);
    }
    //let vn = document.getElementById('Vietnam');
    //console.log(vn.value);
    if(name == "")
    {
        let a = document.getElementsByClassName('test');
        a[0].innerHTML = "(*)";
    }
    else 
    {
        let a = document.getElementsByClassName('test');
        a[0].innerHTML = "";
    }
    if(sdt == "")
    {
        let a = document.getElementsByClassName('test1');
        a[0].innerHTML = "(*)";
    }
    else 
    {
        let a = document.getElementsByClassName('test1');
        a[0].innerHTML = "";
    }
    if(mail == "")
    {
        let a = document.getElementsByClassName('test2');
        a[0].innerHTML = "(*)";
    }
    else 
    {
        let a = document.getElementsByClassName('test2');
        a[0].innerHTML = "";
    }

    let c1 = document.getElementsByClassName('label');
    //console.log(c1[5].value);

    arrLuuTru[0] = name;
    arrLuuTru[1] = sdt;
    arrLuuTru[2] = mail;
    arrLuuTru[3] = sex;
    arrLuuTru[4] = c1[5].value;

    for(let i=0;i<arrLuuTru.length;++i)
    {
        console.log(arrLuuTru[i]);
    }

    // if(name == "" || sdt == "" || mail == "")
    // {
    //     //let thongBao = document.getElementsByClassName('thongBao');
    //     swal({title: "Đăng kí thông tin không thành công", icon: "error"});
    //     //thongBao[0].innerHTML = "Ảo thật đấy";
    //     document.getElementsByTagName('form')[0].reset();
    //     return;
    // }
    

    // if(isNaN(sdt))
    // {
    //     swal({title: "Đăng kí sdt không thành công", icon: "error"});
    //     document.getElementsByTagName('form')[0].reset();
    //     return;
    // }

    // if(name != "" && sdt != "" && mail != "")
    // {
        
       // window.location.href = "buoi13_1.html";

    // }
    // Tạo 1 chuỗi chính là bảng HTML
    let result = 
    `<tr>
        <td>Họ tên</td>
        <td>${arrLuuTru[0]}</td>
       
    </tr>
    <tr>
        <td>Tuổi</td>
        <td>${arrLuuTru[1]}</td>
    </tr>
    <tr>
        <td>Email</td>
        <td>${arrLuuTru[2]}</td>
    </tr>
    <tr>
        <td>Giới tính</td>
        <td>${arrLuuTru[3]}</td>
    </tr>
    <tr>
        <td>Quốc tịch</td>
        <td>${arrLuuTru[4]}</td>
    </tr>`;
    // in ra bảng HTML bằng innerHTML
    document.getElementById('ketqua').innerHTML = result;
        
}

function myButton2()
{
    let a = document.getElementsByClassName('test69');
    
    for(let i=0;i<arrLuuTru.length;++i)
    {
        a[i] = arrLuuTru[i];
        a[i].innerHTML = arrLuuTru[i];
    }
}

// function myButtonEmail() {
//     // dùng dom để in ra giá trị nhập vào của form input
//     let email = document.getElementById('mail');
//     let thongBao = document.getElementsByClassName('thongBao');

//     console.log(email.value);
//     if (email.value == '') {
//         thongBao[0].innerHTML = "Vui lòng nhập đầy đủ thông tin.";
//         return;
       
//     }

//     let regexEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
//     if (!regexEmail.test(email.value)) {
//         thongBao[0].innerHTML = "Email nhập không hợp lệ. Xin kiểm tra lại!!";
//         return;
        
//     }
//     else if (regexEmail.test(email.value)) {
//         thongBao[0].innerHTML = "";
//         return;
//     }
// }


// function myButtonSDT() {
//     // dùng dom để in ra giá trị nhập vào của form input
//     let SDT = document.getElementById('sdt');
//     let thongBao1 = document.getElementsByClassName('thongBao1');

//     console.log(SDT.value);
//     if (SDT.value == '') {
//         thongBao1[0].innerHTML = "Vui lòng nhập đầy đủ thông tin.";
//         return;
//     }

//     let regexSDT = /((09|03|07|08|05|01)+([0-9]{8})\b)/g;
//     if (regexSDT.test(SDT.value)) {
//         thongBao1[0].innerHTML = "";
//         return;
//     }
//     else if (!(regexSDT.test(SDT.value))) {
//         thongBao1[0].innerHTML = "Sdt nhập không hợp lệ. Xin kiểm tra lại!!";
//         return;
//     }
// }

/*
// swal("Xin Chào");

// swal({
//     title: "title",
//     text: "Hello world!",
// });
// swal("Here's the title!", "...and here's the text!", "error");

function myButton() {
    let thongBao = document.getElementsByClassName('thongbao');
    // Dùng DOM để in ra giá trị nhập vào của form input
    let email = document.getElementById('email');
    console.log(email.value);
    // Validate email
    let regexEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    // Nếu là email thì trả về TRUE còn ko phải là email thì trả về FALSE
    console.log("Kiểm tra email:", regexEmail.test(email.value));
    // Validate rỗng
    if (email.value == "" || email.value == null) {
        thongBao[0].innerHTML = "Bạn chưa nhập email";
        // swal("Bạn chưa nhập email", "Vui lòng nhập đầy đủ thông tin", "error");
    } 
    else if (!regexEmail.test(email.value)) {
        thongBao[0].innerHTML = "Bạn đã nhập sai email. Vui lòng nhập lại.";
        // swal("Bạn nhập sai email", "Vui lòng nhập lại thông tin", "error");
    }
    // Nếu nhập lại là đúng thì sẽ tắt thông báo
    if (regexEmail.test(email.value)) {
        thongBao[0].innerHTML = "";
    }

    let phoneNumber = document.getElementById('phoneNumber');
    console.log(phoneNumber.value);
    var regexPhone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    console.log("Kiểm tra phone:", regexPhone.test(phoneNumber.value));
    if (phoneNumber.value == "" || phoneNumber.value == null) {
        thongBao[1].innerHTML = "Bạn chưa nhập số điện thoại";
    } else if (!regexPhone.test(phoneNumber.value)) {
        thongBao[1].innerHTML = "Vui lòng nhập lại số điện thoại";
    }
    // Nếu nhập lại là đúng thì sẽ tắt thông báo
    if (regexPhone.test(phoneNumber.value)) {
        thongBao[1].innerHTML = "";
    }
}
*/
