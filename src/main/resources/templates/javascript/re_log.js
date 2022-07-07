function showRe_Log() {
    document.getElementById("main").innerHTML = `<style>
    .login-page {
        width: 460px;
        padding: 8% 0 0;
        margin: auto;
    }
    .form {
        position: relative;
        z-index: 1;
        background: #FFFFFF;
        max-width: 460px;
        margin: 0 auto 100px;
        padding: 45px;
        text-align: center;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    }
    .form input {
        outline: 0;
        background: #f2f2f2;
        width: 100%;
        border: 0;
        margin: 0 0 15px;
        padding: 15px;
        box-sizing: border-box;
        font-size: 14px;
    }
    .form button {
        text-transform: uppercase;
        outline: 0;
        background: #4caf8c;
        width: 100%;
        border: 0;
        padding: 15px;
        color: #FFFFFF;
        font-size: 14px;
        -webkit-transition: all 0.3 ease;
        transition: all 0.3 ease;
        cursor: pointer;
    }
    .form button:hover,.form button:active,.form button:focus {
        background: #43a08f;
    }
    .form .message {
        margin: 15px 0 0;
        color: #b3b3b3;
        font-size: 12px;
    }
    .form .message a {
        color: #4CAF50;
        text-decoration: none;
    }
    .form .register-form {
        display: none;
    }
    .container {
        position: relative;
        z-index: 1;
        max-width: 500px;
        margin: 0 auto;
        margin-top: 90px;
    }
    .container:before, .container:after {
        content: "";
        display: block;
        clear: both;
    }
    .container .info {
        margin: 50px auto;
        text-align: center;
    }
    .container .info h1 {
        margin: 0 0 15px;
        padding: 0;
        font-size: 36px;
        font-weight: 300;
        color: #1a1a1a;
    }
    .container .info span {
        color: #4d4d4d;
        font-size: 12px;
    }
    .container .info span a {
        color: #000000;
        text-decoration: none;
    }
    .container .info span .fa {
        color: #EF3B3A;
    }
    body {
        background: #76b852; /* fallback for old browsers */
        background: rgb(141,194,111);
        background: linear-gradient(90deg, rgb(111,194,165) 0%, rgb(89,184,82) 50%);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
<div class="login-page">
  <div class="form" id="form">
    <div class="login-form">
    </div>
  </div>
</div>`;
    formLogin()
}

function formLogin() {
    document.getElementById("form").innerHTML = `<input type="text" placeholder="Tên tài khoản"  id = "username"/>
      <input type="password" placeholder="Mật khẩu" id="password" />
      <button onclick="login()">login</button>
      <p class="message">Bạn chưa đăng kí ? <a onclick="FormRegister()">Đăng kí</a></p>`
}

function FormRegister() {
    document.getElementById("form").innerHTML = `
           <input type="text" placeholder="Tên tài khoản" id = "usernameRegister"/>
           <p id="errorUn" style="color: #b74040"></p>
          <input type="password" placeholder="Mật khẩu" id="passWordRegister"/>
          <p id="errorPw" style="color: #b74040"></p>
          <input type="text" placeholder="Nhập lại mật khẩu" id = "confirmPassword"/>
          <p id="errorCfw" style="color: #b74040"></p>
          <button onclick="register()">Đăng kí</button>
          <p class="message">Bạn đã đăng kí ? <a onclick="formLogin()">Đăng nhập</a></p>`
}

function login() {
    let userName = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let user = {
        username: userName,
        password: password,
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: "POST",
        url: "http://localhost:8080/login",
        data: JSON.stringify(user),
        success: function (data) {
            console.log(data)
            localStorage.setItem(storageKey, data.accessToken)
            localStorage.setItem(storageKeyId, data.id)
            loginNotice(true);
        },
        error: function (error) {
            console.log(error);
            loginNotice(false);
        }
    })
}

function register() {
    let usernamePattern = ".{6,}"
    let passwordPattern = ".{8,}"
    let userName = document.getElementById("usernameRegister").value;
    let password = document.getElementById("passWordRegister").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (!userName.match(usernamePattern)) {
        document.getElementById("errorUn").innerHTML = `Vui lòng nhập ít nhất 6 kí tự!`
    }
    if (!password.match(passwordPattern)) {
        document.getElementById("errorPw").innerHTML = `Vui lòng nhập ít nhất 8 kí tự!`
    }
    if (confirmPassword !== password) {
        document.getElementById("errorCfw").innerHTML = `Nhập đúng mật khẩu bạn vừa nhập!`
    }
    if (userName.match(usernamePattern) && password.match(passwordPattern) && confirmPassword === password) {
        let user = {
            username: userName,
            password: password,
            confirmPassword: confirmPassword
        }
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            type: "POST",
            url: "http://localhost:8080/register",
            data: JSON.stringify(user),
            success: function () {
                $('#usernameRegister').val("");
                $('#passWordRegister').val("");
                $('#confirmPassword').val("");
                registrationNotice()
            },
            error: function (error) {
                console.log(error)
            }
        })
    }
}

function loginNotice(flag) {
    if (flag === true) {
        document.getElementById("show_modal").innerHTML =
            `<div class="modal-content">
                    <div class="modal-header">
                        <h5>Thông Báo</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="text-align: right;">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                           <p style="color: #4caf8c">Đăng nhập thành công!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button"  data-dismiss="modal">Đóng</button>
                    </div>
                </div>`
        jQuery.noConflict();
        $('#staticBackdrop').modal('show');
    }
    if (flag === false) {
        document.getElementById("show_modal").innerHTML =
            `<div class="modal-content">
                    <div class="modal-header">
                        <h5>Thông Báo</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="text-align: right;">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                           <p style="color: #e14040">Sai tài khoản hoặc mật khẩu!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button"  data-dismiss="modal">Đóng</button>
                    </div>
                </div>`
        jQuery.noConflict();
        $('#staticBackdrop').modal('show');
    }

}

function registrationNotice() {
    document.getElementById("show_modal").innerHTML =
        `<div class="modal-content">
                    <div class="modal-header">
                        <h5>Thông Báo</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="text-align: right;">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                           <p style="color: #4caf8c">Đăng kí thành công!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button"  data-dismiss="modal">Đóng</button>
                    </div>
                </div>`
    jQuery.noConflict();
    $('#staticBackdrop').modal('show');
}