var thu = prompt("Vui lòng nhập vào thứ: ");
//var n = Number(thu); // đổi chuỗi thành số
var n1 = parseInt(thu, 10); // Cơ số là một số từ 2 đến 36. Ví dụ, cơ số 2 sẽ đại diện cho hệ nhị phân, trong khi cơ số 10 đại diện cho hệ thập phân.
switch (n1) 
{
    case 0:
        {
            console.log("Hôm nay là thứ chủ nhật");
            break;
        }
    case 2:
        {
            console.log("Hôm nay là thứ hai");
            break;
        }
    case 3:
        {
            console.log("Hôm nay là thứ ba");
            break;
        }
    case 4:
        {
            console.log("Hôm nay là thứ tư");
            break;
        }
    case 5:
        {
            console.log("Hôm nay là thứ năm");
            break;
        }
    case 6:
        {
            console.log("Hôm nay là thứ sáu");
            break;
        }
    case 7:
        {
            console.log("Hôm nay là thứ bảy");
            break;
        }
    default:
        {
            console.log("Thứ không hợp lệ!");
            break;
        }
}
