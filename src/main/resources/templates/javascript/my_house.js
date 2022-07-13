function showAllMyHome() {
    if (localStorage.getItem(storageKeyId) === "") {
        noticeToLogin();
    }
    if (localStorage.getItem(storageKeyId) !== "") {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/house/user/" + localStorage.getItem(storageKeyId),
            success: function (houses) {
                htmlMyHome(houses)
            }, error: function (error) {
                console.log(error)
            }
        })
    }
}

function htmlMyHome(houses) {
    document.getElementById("main").innerHTML =
        `
        <div class="container-fluid p-0">
            <div class="row" style="background: #4caf8c;width: 100%">
                <h1 style="color: #FFFFFF;margin-left: 22%;"><img src="https://firebasestorage.googleapis.com/v0/b/comhut-6cb9a.appspot.com/o/output-onlinegiftools.gif?alt=media&token=6cdc0287-cd96-411d-bc4e-be950e86fa8e" style="width: 60px;height: 60px">DANH SÁCH NHÀ CỦA BẠN
                <img src="https://firebasestorage.googleapis.com/v0/b/comhut-6cb9a.appspot.com/o/output-onlinegiftools.gif?alt=media&token=6cdc0287-cd96-411d-bc4e-be950e86fa8e" style="width: 60px;height: 60px"></h1>
            </div>
            <div class="row" style="background: #4caf8c;width: 100%">
                <h1 style="color: #FFFFFF;margin-left: 31%;">QUẢN LÝ YOUR HOME</h1>
            </div>
            <div class="row mt-3" style="height: 90vh">
                <div class="col-12">
                    <table class="table" style="color: #eff6f2; margin-right: 30px">
                            <tr>
                                <th>Tên nhà</th>
                                <th>Trạng thái</th>
                                <th>Sửa thông tin</th>
                                <th>Xóa thông tin</th>
                                <th colspan="2">Thêm ảnh</th>
                            </tr>
                            <tbody id = "yourHomes">
                             
                           </tbody>
                    </table>
                </div>
            </div>
        </div>
        `
    let str = ``
    if (houses.length == 0) {
        document.getElementById("yourHomes").innerHTML = `<tr>
                                <th>Hiện tại bạn không có nhà nào !! Vui lòng thêm</th>
                            </tr>`
    } else {
        for (let i = 0; i < houses.length; i++) {
            if (houses[i].status === 1) {
                str += `<tr>
                                <th>${houses[i].name}</th>
                                <th>Sẵn sàng</th>
                                <th><a style="color: #f3edee" onclick="showFormEdit(${houses[i].id})">Sửa</a></th>
                                <th><a style="color: #eeeaea">Xóa</a></th>
                                <th><input type="file" value="upload" accept=".jpg" id="fileButton" onchange="upload(event)" style="width: 50%"></th>
                                <th><a style="color: #efeded" onclick="sendImage(${houses[i].id})">Thêm</a></th>
                            </tr>`
            }
            if (houses[i].status === 2) {
                str += `<tr>
                                <th>${houses[i].name}</th>
                                <th>Đang được thuê</th>
                                <th><a style="color: #f5eff0" onclick="showFormEdit(${houses[i].id})">Sửa</a></th>
                                <th><a style="color: #f1ecec">Xóa</a></th>
                                <td><input type="file" value="upload" accept=".jpg" id="fileButton" onchange="upload(event)" style="width: 50%; height: 30%"></td>
                                <td><a style="color: #f5f1f1"  onclick="sendImage(${houses[i].id})">Thêm</a></td>
                            </tr>`
            }
            if (houses[i].status === 3) {
                str += `<tr>
                                <th>${houses[i].name}</th>
                                <th>Đang sửa chữa</th>
                                <th><a style="color: #efe8e9" onclick="showFormEdit(${houses[i].id})">Sửa</a></th>
                                <th><a style="color: #efe9ea">Xóa</a></th>
                                <th><input type="file" value="upload" accept=".jpg" id="fileButton" onchange="upload(event)" style="width: 50%"></th>
                                 <th><a style="color: #f5f1f1"  onclick="sendImage(${houses[i].id})">Thêm</a></th>
                            </tr>`
            }
        }
        document.getElementById("yourHomes").innerHTML = str
    }
}

function showFormEdit(idHouse) {
    document.getElementById("show_modal").innerHTML =
        `<div class="modal-content">
                    <div class="modal-header">
                        <h5>Thông báo</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="text-align: right;">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                           <input type="text" id="nameEdit" placeholder="Tên nhà">
                           <hr>
                           <input type="text" id="addressEdit" placeholder="Địa chỉ">
                           <hr>
                           <input type="text" id="bedroomEdit" placeholder="Số phòng tắm">
                           <hr>
                           <input type="text" id="bathroomEdit" placeholder="Số phòng ngủ">
                           <hr>
                           <input type="text" id="descriptionEdit" placeholder="Mô tả thêm">
                           <hr>
                           <input type="text" id="priceEdit" placeholder="Giá tiền">
                           <hr>
                           <select id="statusEdit">
                                <option value="1">Sắn sàng</option>
                                <option value="2">Đang được thuê</option>
                                <option value="3">Đang sửa chữa</option>
                           </select>
                           <select id="idCategoryEdit"></select>
                    </div>
                    <div class="modal-footer">
                        <button type="button"  data-dismiss="modal" onclick="editMyHouse(${idHouse})">Lưu</button>
                    </div>
                </div>`
    findHouseById(idHouse)
    findAllCategoryEdit()
    jQuery.noConflict();
    $('#staticBackdrop').modal('show');
}

function findAllCategoryEdit() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/category",
        success: function (categories) {
            let str = ``
            for (let i = 0; i < categories.length; i++) {
                str += `<option value="${categories[i].id}">${categories[i].name}</option>`
            }
            document.getElementById("idCategoryEdit").innerHTML = str;

        }, error: function (error) {
            console.log(error)
        }
    })
}

function findHouseById(idHouse) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/house/" + idHouse,
        success: function (house) {
            console.log(house)
            document.getElementById("nameEdit").value = house.name;
            document.getElementById("addressEdit").value = house.address;
            document.getElementById("bedroomEdit").value = house.bedroom;
            document.getElementById("bathroomEdit").value = house.bathroom;
            document.getElementById("descriptionEdit").value = house.description;
            document.getElementById("priceEdit").value = house.price;
            document.getElementById("statusEdit").value = house.status;
            document.getElementById("idCategoryEdit").value = house.idCategory.id;
        }, error: function (error) {
            console.log(error)
        }
    })
}

function editMyHouse(idHouse) {
    let name = document.getElementById("nameEdit").value;
    let address = document.getElementById("addressEdit").value;
    let bedroom = document.getElementById("bedroomEdit").value;
    let bathroom = document.getElementById("bathroomEdit").value;
    let description = document.getElementById("descriptionEdit").value;
    let price = document.getElementById("priceEdit").value;
    let status = document.getElementById("statusEdit").value;
    let idCategory = document.getElementById("idCategoryEdit").value;
    let idUserOwner = localStorage.getItem(storageKeyId);
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
            id: idUserOwner
        }
    }
    console.log(house)
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem(storageKey)
        },
        type: "PUT",
        url: "http://localhost:8080/house/" + idHouse,
        data: JSON.stringify(house),
        success: function () {
            showAllMyHome()
            noticeSuccessfulEditHouse();
        }, error: function (error) {
            console.log(error)
        }
    })
}

function noticeSuccessfulEditHouse() {
    document.getElementById("show_modal").innerHTML =
        `<div class="modal-content">
                    <div class="modal-header">
                        <h5>Thông báo</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="text-align: right;">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                           <p style="color: #4caf8c">Nhà của bạn đã được cập nhật !</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button"  data-dismiss="modal">OK</button>
                    </div>
                </div>`
    jQuery.noConflict();
    $('#staticBackdrop').modal('show');
}