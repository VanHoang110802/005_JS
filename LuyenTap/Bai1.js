let tempLuaChon;

let slideIndex = 0;

slide(slideIndex);

function nextSlide(n) {
    slide(slideIndex += n);
}

function slide() {
    // Dùng DOM để truy cập đến các phần tử ảnh
    let image = document.getElementsByClassName('mySlide');
   
    if (slideIndex >= image.length) {
        slideIndex = 0;
    }
    
    if (slideIndex < 0) {
        slideIndex = image.length - 1;
    }
    
    for (let i = 0; i < image.length; i++) {
        image[i].style.display = 'none';
    }
    
    image[slideIndex].style.display = 'block';
}

// Auto
let auto;
function autoSlide() {
    // Dùng DOM để truy cập đến các phần tử ảnh
    let image = document.getElementsByClassName('mySlide');
    // Nếu chạy hết mảng thì về phần tử đầu tiên
    if (slideIndex >= image.length) {
        slideIndex = 0;
    }
    // Reset toàn bộ ảnh về trạng thái ẩn
    for (let i = 0; i < image.length; i++) {
        image[i].style.display = 'none';
    }
    // Hiển thị ảnh sau mỗi lần click
    image[slideIndex].style.display = 'block';
    slideIndex++;
    // truyền vào 2 tham số 
    // 1 là tên hàm cần chạy lại
    // 2 là khoảng thời gian lặp lại (x1000)
    auto = setTimeout(autoSlide, 2000);
}
// autoSlide();

// Dừng slide
function stopSlide() {
    clearInterval(auto);
}


function timHocPhi() {
    let vlHocPhi = document.getElementById('register_HocPhi');
    let lcKhoaHoc = document.getElementsByClassName('luaChonKhoaHoc');
    let tempLuaChon = lcKhoaHoc[0].value;

    if (tempLuaChon == "Khóa HTML")
        vlHocPhi.value = 500;
    else if (tempLuaChon == "Khóa JS")
        vlHocPhi.value = 800;
    else if (tempLuaChon == "Khóa PHP")
        vlHocPhi.value = 1000;
    else if (tempLuaChon == "")
        vlHocPhi.value = null;
}

function removeAscent(str) {  // tìm những kí tự có dấu và thay thế chúng
    if (str === null || str === undefined) return str;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    return str;
}

function isValid(string) {
    var re = /^[a-zA-Z ]{2,}$/g // regex here
    return re.test(removeAscent(string))
}

function myButtonSubmit() {
    let arr = document.getElementsByTagName('input');
    let getName = arr[0].value;
    let thongBaoName = document.getElementsByClassName('thongBaoName');

    if (getName == "" || getName == null) {

        thongBaoName[0].innerHTML = "(*)Thông tin không được để trống.";
        return;
    }
    else {
        thongBaoName[0].innerHTML = "";
        if (isValid(getName)) {
            thongBaoName[0].innerHTML = "";
        }
        else {

            thongBaoName[0].innerHTML = "(*)Tên nhập không hợp lệ.";
            return;
        }
    }



    // email
    let getEmail = arr[1].value;

    var regexEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    let thongBaoEmail = document.getElementsByClassName('thongBaoEmail');
    if (getEmail == "" || getEmail == null) {
        thongBaoEmail[0].innerHTML = "(*)Thông tin không được để trống.";
        return;
    }
    else {
        thongBaoEmail[0].innerHTML = "";
        if (!regexEmail.test(getEmail)) {
            thongBaoEmail[0].innerHTML = "(*)Email nhập không hợp lệ.";
            return;
        }
        else {
            thongBaoEmail[0].innerHTML = "";
        }
    }




    // // so dien thoai
    let getSDT = arr[2].value;
    let thongBaoSDT = document.getElementsByClassName('thongBaoSDT');
    var regexNumber = /^\d+$/;
    var regexSDT = /((09|03|07|08|05|01)+([0-9]{8})\b)/g;

    if (getSDT == "" || getSDT == null) {
        thongBaoSDT[0].innerHTML = "(*)Thông tin không được để trống.";
        return;
    }
    else {
        thongBaoSDT[0].innerHTML = "";
        if (!regexNumber.test(getSDT)) {
            thongBaoSDT[0].innerHTML = "(*)Số điện thoại nhập không hợp lệ.";
            return;
        }
        else {
            thongBaoSDT[0].innerHTML = "";
        }

        if (!regexSDT.test(getSDT)) {
            thongBaoSDT[0].innerHTML = "(*)Thông tin số điện thoại nhập không hợp lệ.";
            return;
        }
        else {
            thongBaoSDT[0].innerHTML = "";
        }

    }


    // khoa hoc
    let thongBaoKhoaHoc = document.getElementsByClassName('thongBaoKhoaHoc');
    let lcKhoaHoc = document.getElementsByClassName('luaChonKhoaHoc');
    let lc = lcKhoaHoc[0].value;

    if (lc == "" || lc == null) {
        thongBaoKhoaHoc[0].innerHTML = "(*)Thông tin không được để trống.";
        return;
    }
    else {
        thongBaoKhoaHoc[0].innerHTML = "";

    }


    let hinhThuc = "";
    let thongBaoHinhThucHoc = document.getElementsByClassName('thongBaoHinhThucHoc');
    if (arr[4].checked) {
        hinhThuc = arr[4].value;
    }
    else if (arr[5].checked) {
        hinhThuc = arr[5].value
    }
    if (hinhThuc == "" || hinhThuc == null) {
        thongBaoHinhThucHoc[0].innerHTML = "(*)Thông tin không được để trống.";
        return;
    }
    else {

        thongBaoHinhThucHoc[0].innerHTML = "";
    }

    alert("Đăng kí thành công!!");
}

/*
.textDangKi
{
    margin-left: 20px;
}

.labelText
{
    font-size: 18px;
}
.inputName
{
    margin-left: 70px;
}
.inputEmail
{
    margin-left: 71px;
}
.inputSDT
{
    margin-left: 22px;
}
.luaChonKhoaHoc
{
    margin-left: 113px;
}
.inputHP
{
    margin-left: 125px;
}
.inputHinhThuc
{
    margin-left: 80px;
}
.inputSubmit
{
    margin-left: 150px;
}
.thongBaoName, .thongBaoSDT, .thongBaoEmail, .thongBaoHocPhi, .thongBaoHanhLy, .thongBaoKhoaHoc, .thongBaoHinhThucHoc
{
    color: red;
    margin-left: 190px;
}
*/
