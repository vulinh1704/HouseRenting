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
        background: linear-gradient(90deg, rgb(66,176,118) 0%, rgb(66,176,118) 50%);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
<div class="login-page" style="height: 100vh">
  <div class="form" id="form">
    <div class="login-form">
    </div>
  </div>
</div>`;
    formLogin()
}

function formLogin() {
    document.getElementById("form").innerHTML = `<input type="text" placeholder="T??n t??i kho???n"  id = "username"/>
      <input type="password" placeholder="M???t kh???u" id="password" />
      <button onclick="login()">login</button>
      <p class="message">B???n ch??a ????ng k?? ? <a onclick="FormRegister()">????ng k??</a></p>`
}

function FormRegister() {
    document.getElementById("form").innerHTML = `
           <input type="text" placeholder="T??n t??i kho???n" id = "usernameRegister"/>
           <p id="errorUn" style="color: #b74040"></p>
          <input type="password" placeholder="M???t kh???u" id="passWordRegister"/>
          <p id="errorPw" style="color: #b74040"></p>
          <input type="text" placeholder="Nh???p l???i m???t kh???u" id = "confirmPassword"/>
          <p id="errorCfw" style="color: #b74040"></p>
          <button onclick="register()">????ng k??</button>
          <p class="message">B???n ???? ????ng k?? ? <a onclick="formLogin()">????ng nh???p</a></p>`
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
        document.getElementById("errorUn").innerHTML = `Vui l??ng nh???p ??t nh???t 6 k?? t???!`
    }
    if (!password.match(passwordPattern)) {
        document.getElementById("errorPw").innerHTML = `Vui l??ng nh???p ??t nh???t 8 k?? t???!`
    }
    if (confirmPassword !== password) {
        document.getElementById("errorCfw").innerHTML = `Nh???p ????ng m???t kh???u b???n v???a nh???p!`
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
                        <h5>Th??ng B??o</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="text-align: right;">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                           <p style="color: #4caf8c">????ng nh???p th??nh c??ng!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button"  data-dismiss="modal">????ng</button>
                    </div>
                </div>`
        formNav()
        showUser(localStorage.getItem(storageKeyId));
        jQuery.noConflict();
        $('#staticBackdrop').modal('show');
    }
    if (flag === false) {
        document.getElementById("show_modal").innerHTML =
            `<div class="modal-content">
                    <div class="modal-header">
                        <h5>Th??ng B??o</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="text-align: right;">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                           <p style="color: #e14040">Sai t??i kho???n ho???c m???t kh???u!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button"  data-dismiss="modal">????ng</button>
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
                        <h5>Th??ng B??o</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="text-align: right;">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                           <p style="color: #4caf8c">????ng k?? th??nh c??ng!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button"  data-dismiss="modal" onclick="showRe_Log()">????ng</button>
                    </div>
                </div>`
    jQuery.noConflict();
    $('#staticBackdrop').modal('show');
}

function showUser(id) {
    $.ajax({
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem(storageKey)
        },
        type: "GET",
        url: "http://localhost:8080/users/" + id,
        success: function (user) {
            console.log(user)
            document.getElementById("user").innerHTML = `<a class="nav-link"><i class="fa-solid fa-user-astronaut"></i> ${user.username}</a>`
        }, error: function (error) {
            console.log(error)
        }
    })
}

function formLogout() {
    document.getElementById("show_modal").innerHTML =
        `<div class="modal-content">
                    <div class="modal-header">
                        <h5>Th??ng B??o</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="text-align: right;">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                           <p style="color: #4caf8c">B???n mu???n ????ng xu???t ?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button"  data-dismiss="modal" onclick="logout()">?????ng ??</button></span>
                    </div>
                </div>`
    jQuery.noConflict();
    $('#staticBackdrop').modal('show');
}

function logout() {
    localStorage.setItem(storageKey , "");
    localStorage.setItem(storageKeyId , "");
    localStorage.setItem(storageKeyImg , "");
    formNav()
    showRe_Log()
}

function formNav() {
    if(localStorage.getItem(storageKey) !== ""){
        document.getElementById("log").innerHTML = `<a class="nav-link" onclick="formLogout()"><i class="fa-solid fa-right-from-bracket"></i> ????NG XU???T</a>`
        htmlHouse()
    } else {
        document.getElementById("log").innerHTML = `<a class="nav-link" onclick="showRe_Log()"><i class="fa-solid fa-right-to-bracket"></i> ????NG NH???P</a>`
        document.getElementById("user").innerHTML = ``
    }
}