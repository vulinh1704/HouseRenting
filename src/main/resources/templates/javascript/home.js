showHome();
let storageKey = 'token';
let storageKeyId = 'id';
function showHome() {
    document.getElementById("main").innerHTML = ` <div class="row">
                <div class="col-md-7 col-sm-12 text-white">
                    <h6>ĐƯỢC SẢN XUẤT BỞI LLL</h6>
                    <h1><img src="https://firebasestorage.googleapis.com/v0/b/comhut-6cb9a.appspot.com/o/loli-unscreen.gif?alt=media&token=9089f1f3-5203-419a-aca1-032babdfd987" style="height: 50px;width: 
                    50px">THIÊN ĐƯỜNG NHÀ<img src="https://firebasestorage.googleapis.com/v0/b/comhut-6cb9a.appspot.com/o/loli-unscreen.gif?alt=media&token=9089f1f3-5203-419a-aca1-032babdfd987" style="height: 50px;width: 
                    50px"></h1>
                    <p>Bạn đang đau đầu về việc vô gia cư ? Vậy thì xin chúc mừng bạn đã dặt chân đến
                        thiên đường nhà nơi mà bạn sẽ có căn nhà với giá từ số 0 :))</p>
                    <button class="btn btn-light primary-btn" style="border-radius: 50px ; width: 50%;color: #48b46e" onclick="htmlHouse()">
                        Đặt nhà ngay!!
                    </button>
                </div>
                <div class="col-md-5 col-sm-12">
                    <img src="https://firebasestorage.googleapis.com/v0/b/comhut-6cb9a.appspot.com/o/images%2Fpixlr-bg-result%20(2).png?alt=media&token=121f1bde-044e-48cf-8617-1c2102d4c8c0" width="600px" height="600px">
                </div>
            </div>`
}