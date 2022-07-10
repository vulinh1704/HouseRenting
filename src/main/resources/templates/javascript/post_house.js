function htmlPostHouse() {
    if (localStorage.getItem(storageKey) === "") {
        noticeToLogin();
    }
    if (localStorage.getItem(storageKey) !== "") {
        document.getElementById("main").innerHTML =
            `<div class="container-fluid p-0">
                <div class="row" style="background: #4caf8c;width: 100%">
                    <h1 style="color: #FFFFFF;margin-left: 38%;"><img src="https://firebasestorage.googleapis.com/v0/b/comhut-6cb9a.appspot.com/o/output-onlinegiftools.gif?alt=media&token=6cdc0287-cd96-411d-bc4e-be950e86fa8e" style="width: 60px;height: 60px">ĐĂNG BÀI
                    <img src="https://firebasestorage.googleapis.com/v0/b/comhut-6cb9a.appspot.com/o/output-onlinegiftools.gif?alt=media&token=6cdc0287-cd96-411d-bc4e-be950e86fa8e" style="width: 60px;height: 60px"></h1>
                </div>
                <div class="row" style="background: #4caf8c;width: 100%">
                    <h1 style="color: #FFFFFF;margin-left: 20%;">HÃY CHO THẾ GIỚI SEE YOUR HOUSE !!</h1>
                </div>
                <div class="row mt-4" id="houseDetail" style="height: 120vh">
                    <div class="col-12">
                        <table class="table table-borderless" style="color: #FFFFFF">
                            <tr>
                              <th scope="col">Tên căn nhà</th>
                              <td><input type="text" placeholder="Tên" id = "nameAdd"></td>
                            </tr>
                            <tr>
                              <th scope="col">Địa chỉ</th>
                              <td><input type="text" placeholder="Địa chỉ" id = "addressAdd"></td>
                            </tr>
                            <tr>
                              <th scope="col">Số phòng ngủ</th>
                              <td><input type="text" placeholder="Số phòng ngủ" style="width: 50%; margin-right: 100%" id = "bedroomAdd"></td>
                            </tr>
                            <tr>
                              <th scope="col">Số phòng tắm</th>
                              <td><input type="text" placeholder="Số phòng tắm" style="width: 50%; margin-right: 100%" id = "bathroomAdd"></td>
                            </tr>
                            <tr>
                              <th scope="col">Giá tiền</th>
                              <td><input type="text" placeholder="Giá tiền" style="width: 50%; margin-right: 100%" id = "priceAdd"></td>
                            </tr>
                            <tr>
                              <th scope="col">Trạng thái căn nhà</th>
                              <td><select id="statusHouseAdd" style="margin-right: 100%">
                                     <option value="1">Sẵn sàng</option>
                                     <option value="2">Đang được thuê</option>
                                     <option value="3">Đang sửa chữa</option>
                                    </select></td>
                            </tr>
                            <tr>
                                <th scope="col">Loại phòng</th>
                                <td><select name="categories" id="categoriesAdd" style="margin-right: 100%"></select></td>
                            </tr>
                            <tr>
                              <th scope="col">Mô tả thêm</th>
                              <td><input type="textarea" placeholder="Mô tả" style="width: 100% ;height: 100px;" id = "descriptionAdd"></td>
                            </tr>
                            <tr>
                              <th scope="col">Ảnh</th>
                              <td><input type="file" value="upload" accept=".jpg" id="fileButton" onchange="upload(event)"></td>
                            </tr>
                            <tr>
                              <th scope="col"></th>
                              <td><button style="background-color: #0095ff" onclick="saveHouse()" >Đăng ngay</button></td>
                            </tr>
                        </table>
                    </div>
                </div>             
            `
        findAllCategory()
    }
}

function findAllCategory() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/category",
        success: function (categories) {
            let str = ``
            for (let i = 0; i < categories.length; i++) {
                str += `<option value="${categories[i].id}">${categories[i].name}</option>`
            }
            document.getElementById("categoriesAdd").innerHTML = str;

        }, error: function (error) {
            console.log(error)
        }
    })
}

function sendImage(idHouse) {
    let imgs = JSON.parse(localStorage.getItem(storageKeyImg));
    for (let i = 0; i < imgs.length; i++) {
        let image = {
            image: imgs[i],
            idHouse: {
                id: idHouse
            }
        }
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/images",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem(storageKey)
            },
            data: JSON.stringify(image),
            success: function () {
            }, error: function (error) {
                console.log(error);
            }
        })
    }
    noticeSuccessfulHouse();
    images = [];
    localStorage.setItem(storageKeyImg , images);
}

function saveHouse() {
    let name = document.getElementById("nameAdd").value;
    let address = document.getElementById("addressAdd").value;
    let bedroom = document.getElementById("bedroomAdd").value;
    let bathroom = document.getElementById("bathroomAdd").value;
    let description = document.getElementById("descriptionAdd").value
    let price = parseInt(document.getElementById("priceAdd").value);
    let status = parseInt(document.getElementById("statusHouseAdd").value);
    let idCategory = parseInt(document.getElementById("categoriesAdd").value);
    let idUser = parseInt(localStorage.getItem(storageKeyId));
    let house = {
        name: name,
        address: address,
        bedroom: bedroom,
        bathroom: bathroom,
        description: description,
        price: price,
        status: status,
        idCategory: {
            id: idCategory
        },
        idUserOwner: {
            id: idUser
        }
    }
    console.log(house)
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
             Authorization: 'Bearer ' + localStorage.getItem(storageKey)
        },
        type: "POST",
        url: "http://localhost:8080/house",
        data: JSON.stringify(house),
        success: function (home) {
            document.getElementById("nameAdd").value = "";
            document.getElementById("addressAdd").value = "";
            document.getElementById("bedroomAdd").value = "";
            document.getElementById("bathroomAdd").value = "";
            document.getElementById("descriptionAdd").value = "";
            document.getElementById("priceAdd").value = "";
            document.getElementById("statusHouseAdd").value = "1";
            document.getElementById("categoriesAdd").value = "1";
            sendImage(home.id);
        }, error: function (error) {
            console.log(error)
        }
    })
}

function noticeSuccessfulHouse() {
    document.getElementById("show_modal").innerHTML =
        `<div class="modal-content">
                    <div class="modal-header">
                        <h5>Thông báo</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="text-align: right;">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                           <p style="color: #4caf8c">Nhà của bạn đã được lên thế giới !</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button"  data-dismiss="modal">OK</button>
                    </div>
                </div>`
    jQuery.noConflict();
    $('#staticBackdrop').modal('show');
}