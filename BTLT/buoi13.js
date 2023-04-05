function myButtonSubmit() {
    let arr = document.getElementsByTagName('input');

    // ho ten
    let getName = arr[0].value;

    let thongBaoName = document.getElementsByClassName('thongBaoName');
    let checkNumInName = false;
    if (getName == "" || getName == null) {
        thongBaoName[0].innerHTML = "(*)Thông tin không được để trống.";
        return;
    }
    else {
        thongBaoName[0].innerHTML = "";
        for (let i = 0; i < getName.length; ++i) {
            if ((getName[i] < 'A' || (getName[i] > 'Z' && getName[i] < 'a') || getName[i] > 'z') && getName[i] != ' ') {
                checkNumInName = true;
                break;
            }
        }

        if (checkNumInName) // co so trong chuoi ten
        {
            thongBaoName[0].innerHTML = "(*)Thông tin họ tên nhập không hợp lệ.";
            return;
        }
        else {
            thongBaoName[0].innerHTML = "";
        }
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
    if (!regexNumber.test(getSDT))
    {
        thongBaoSDT[0].innerHTML = "(*)Số điện thoại nhập không hợp lệ.";
        return;
    }
    else {
        thongBaoSDT[0].innerHTML = "";
    }

    if (!regexSDT.test(getSDT)) 
    {
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
    if (!regexNumber.test(getCMT))
    {
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
    if (!regexEmail.test(getEmail))
    {
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
    else 
    {
        thongBaoChuyenBay[0].innerHTML = "";
    }

    // ngay thang nam sinh
    let ntn = arr[4].value;
    let thongBaoNTN = document.getElementsByClassName('thongBaoNTN');
    
    if (ntn == "" || ntn == null) {
        thongBaoNTN[0].innerHTML = "(*)Thông tin không được để trống.";
        return;
    }
    else 
    {
        thongBaoNTN[0].innerHTML = "";
    }

    // hanh ly
    let hanhLy = arr[5].value;
    
    let thongBaoHanhLy = document.getElementsByClassName('thongBaoHanhLy');
    if (hanhLy == "" || hanhLy == null) {
        thongBaoHanhLy[0].innerHTML = "(*)Thông tin không được để trống.";
        return;
    }
    else 
    {
        thongBaoHanhLy[0].innerHTML = "";
    }

    // gioi tinh
    let sex = "";
    let thongBaoGioiTinh = document.getElementsByClassName('thongBaoGioiTinh');
    if(arr[6].checked)
    {
        sex = arr[6].value;
    }
    else if(arr[7].checked)
    {
        sex = arr[7].value
    }
    if (sex == "" || sex == null) {
        thongBaoGioiTinh[0].innerHTML = "(*)Thông tin không được để trống.";
        return;
    }
    else 
    {
        thongBaoGioiTinh[0].innerHTML = "";
    }

    // quoc tich
    let thongBaoQuocTich = document.getElementsByClassName('thongBaoQuocTich');
    let lcQuocTich = document.getElementsByClassName('luaChonQuocTich');
    let qt = lcQuocTich[0].value;
    
    if (qt == "" || qt == null) {
        thongBaoQuocTich[0].innerHTML = "(*)Thông tin không được để trống.";
        return;
    }
    else 
    {
        thongBaoQuocTich[0].innerHTML = "";
    }

    // Tạo 1 chuỗi chính là bảng HTML
    let result =
        `<tr>
     <td>Họ tên</td>
     <td>${getName}</td>
    
    </tr>
    <tr>
        <td>Số điện thọai</td>
        <td>${getSDT}</td>
    </tr>
    <tr>
        <td>Chứng minh thư</td>
        <td>${getCMT}</td>
    </tr>
    <tr>
        <td>Email</td>
        <td>${getEmail}</td>
    </tr>
    <tr>
        <td>Chuyến bay</td>
        <td>${cb}</td>
    </tr>
    <tr>
        <td>Hành lý</td>
        <td>${hanhLy}</td>
    </tr>
    <tr>
        <td>Giới tính</td>
        <td>${sex}</td>
    </tr>
    <tr>
        <td>Quốc tịch</td>
        <td>${qt}</td>
    </tr>
    `;
    // in ra bảng HTML bằng innerHTML
    document.getElementById('ketqua').innerHTML = result;
}

function myButtonReset()
{
    document.getElementsByTagName('form')[0].reset();
    //document.getElementById('ketqua').innerHTML = "";
}
