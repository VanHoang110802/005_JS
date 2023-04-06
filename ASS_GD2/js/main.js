// validation form login
const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
btnLogin = document.querySelector(".login__signInButton");

// validation form login

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem(inputUsername.value));

    if (inputUsername.value == "" || inputPassword.value == "") 
    {
        console.log(user);
        alert("vui lòng không để trống");
    }
    else 
    {
        const user = JSON.parse(localStorage.getItem(inputUsername.value));
        if(user == null)
        {
            alert("Đăng Nhập Thất Bại");
        }
        else 
        {
            if (user.username === inputUsername.value && user.password === inputPassword.value) 
            {
                alert("Đăng Nhập Thành Công");
                window.location.href = "testimonials.html";
            }
            else 
            {
                alert("Đăng Nhập Thất Bại");
            }
        }
    }
});
