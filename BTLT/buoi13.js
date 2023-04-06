function removeAscent(str) {
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
    var re = /^[a-zA-Z \$%\^\&*\)\(+=._-]{2,}$/g // regex here
    return re.test(removeAscent(string))
}

function myButtonSubmit() {
    let arr = document.getElementsByTagName('input');


    // ho ten
    let getName = arr[0].value;

    let thongBaoName = document.getElementsByClassName('thongBaoName');

    if (getName == "" || getName == null) {

        thongBaoName[0].innerHTML = "(*)Thông tin không được để trống.";
        return;
    }
    else {
        thongBaoName[0].innerHTML = "";

    }
    //console.log(isValid(getName));

    if (isValid(getName)) {
        thongBaoName[0].innerHTML = "";
    }
    else {

        thongBaoName[0].innerHTML = "(*)Tên nhập không hợp lệ.";
        return;
    }


    // so dien thoai
    let getSDT = arr[1].value;
    let thongBaoSDT = document.getElementsByClassName('thongBaoSDT');
    var regexNumber = /^\d+$/;
    var regexSDT = /((09|03|07|08|05)+([0-9]{8})\b)/g;

    if (getSDT == "" || getSDT == null) {
        thongBaoSDT[0].innerHTML = "(*)Thông tin không được để trống.";
        return;
    }
    else {
        thongBaoSDT[0].innerHTML = "";

    }
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


    // cmt
    let getCMT = arr[2].value;
    let thongBaoCMT = document.getElementsByClassName('thongBaoCMT');
    if (getCMT == "" || getCMT == null) {
        thongBaoCMT[0].innerHTML = "(*)Thông tin không được để trống.";
        return;
    }
    else {
        thongBaoCMT[0].innerHTML = "";

    }
    if (!regexNumber.test(getCMT)) {
        thongBaoCMT[0].innerHTML = "(*)Số chứng thư nhập không hợp lệ.";
        return;
    }
    else {
        if (getCMT.length < 12) {
            thongBaoCMT[0].innerHTML = "(*)Số lượng kí tự trong chứng minh thư không hợp lệ.";
            return;
        }

        else thongBaoCMT[0].innerHTML = "";
    }

    // email
    let getEmail = arr[3].value;

    var regexEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    let thongBaoEmail = document.getElementsByClassName('thongBaoEmail');
    if (getEmail == "" || getEmail == null) {
        thongBaoEmail[0].innerHTML = "(*)Thông tin không được để trống.";
        return;
    }
    else {
        thongBaoEmail[0].innerHTML = "";
    }

    if (!regexEmail.test(getEmail)) {
        thongBaoEmail[0].innerHTML = "(*)Số chứng thư nhập không hợp lệ.";
        return;
    }
    else {
        thongBaoEmail[0].innerHTML = "";
    }

    // chuyen bay
    let thongBaoChuyenBay = document.getElementsByClassName('thongBaoChuyenBay');
    let lcChuyenBay = document.getElementsByClassName('luaChonChuyenBay');
    let cb = lcChuyenBay[0].value;

    if (cb == "" || cb == null) {
        thongBaoChuyenBay[0].innerHTML = "(*)Thông tin không được để trống.";
        return;
    }
    else {
        thongBaoChuyenBay[0].innerHTML = "";
    }

    // ngay thang nam sinh
    let ntn = arr[4].value;
    ntn = ntn.toString();
    ntn = ntn.split('-').reverse().join('/');
    let thongBaoNTN = document.getElementsByClassName('thongBaoNTN');

    if (ntn == "" || ntn == null) {
        thongBaoNTN[0].innerHTML = "(*)Thông tin không được để trống.";
        return;
    }
    else {
        thongBaoNTN[0].innerHTML = "";
    }

    // hanh ly
    let hanhLy = arr[5].value;

    let thongBaoHanhLy = document.getElementsByClassName('thongBaoHanhLy');
    if (hanhLy == "" || hanhLy == null) {
        thongBaoHanhLy[0].innerHTML = "(*)Thông tin không được để trống.";
        return;
    }
    else {
        thongBaoHanhLy[0].innerHTML = "";
    }

    // gioi tinh
    let sex = "";
    let thongBaoGioiTinh = document.getElementsByClassName('thongBaoGioiTinh');
    if (arr[6].checked) {
        sex = arr[6].value;
    }
    else if (arr[7].checked) {
        sex = arr[7].value
    }
    if (sex == "" || sex == null) {
        thongBaoGioiTinh[0].innerHTML = "(*)Thông tin không được để trống.";
        return;
    }
    else {
        thongBaoGioiTinh[0].innerHTML = "";
    }

    // quoc tich
    let thongBaoThanhToan = document.getElementsByClassName('thongBaoThanhToan');
    let lcThanhToan = document.getElementsByClassName('luaChonThanhToan');
    let qt = lcThanhToan[0].value;

    if (qt == "" || qt == null) {
        thongBaoThanhToan[0].innerHTML = "(*)Thông tin không được để trống.";
        return;
    }
    else {
        thongBaoThanhToan[0].innerHTML = "";
    }

    // Tạo 1 chuỗi chính là bảng HTML
    let result =
        `
        <tr style="font-size: 18px;">
     <td>Họ tên</td>
     <td>Số điện thọai</td>
     <td>Chứng minh thư</td>
     <td>Email</td>
     <td>Chuyến bay</td>
     <td>Ngày tháng năm sinh</td>
     <td>Hành lý</td>
     <td>Giới tính</td>
     <td>Thanh toán</td>
    </tr>
    <tr style="font-size: 18px;">
    <td>${getName}</td>
    <td>${getSDT}</td>
    <td>${getCMT}</td>
    <td>${getEmail}</td>
    <td>${cb}</td>
    <td>${ntn}</td>
    <td>${hanhLy}</td>
    <td>${sex}</td>
    <td>${qt}</td>
    </tr>
   
    `;
    // in ra bảng HTML bằng innerHTML
    document.getElementById('ketqua').innerHTML = result;
}

function myButtonReset() {
    document.getElementsByTagName('form')[0].reset();
    //document.getElementById('ketqua').innerHTML = "";
}
