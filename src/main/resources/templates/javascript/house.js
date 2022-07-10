function htmlHouse() {
    showHouses(0)
    document.getElementById("main").innerHTML =
        `
        <div class="container-fluid p-0">
            <div class="row" style="background: #4caf8c;width: 100%">
                <h1 style="color: #FFFFFF;margin-left: 35%;"><img src="https://firebasestorage.googleapis.com/v0/b/comhut-6cb9a.appspot.com/o/output-onlinegiftools.gif?alt=media&token=6cdc0287-cd96-411d-bc4e-be950e86fa8e" style="width: 60px;height: 60px">CHỌN NHÀ
                <img src="https://firebasestorage.googleapis.com/v0/b/comhut-6cb9a.appspot.com/o/output-onlinegiftools.gif?alt=media&token=6cdc0287-cd96-411d-bc4e-be950e86fa8e" style="width: 60px;height: 60px"></h1>
            </div>
            <div class="row" style="background: #4caf8c;width: 100%">
                <h1 style="color: #FFFFFF;margin-left: 20%;">HÃY CHỌN CĂN NHÀ CỦA BẠN !!</h1>
            </div>
            <div class="row mt-3" style="margin-right: 12px">
                <div class="col-3"><button>Giá</button></div>
                <div class="col-3"><button>Địa Chỉ</button></div>
                <div class="col-3"><button>Loại</button></div>
                <div class="col-3"><button>Tên</button></div>
            </div>
            <div class="row" id="houses">
                
            </div>
            <div class="row mt-5">
                <div class="col-4"></div>
                <div class="col-4" id="Pagination" style="background: #4caf8c"></div>
                <div class="col-4"></div>
            </div>
        </div>
        
        `
}

function showHouses(number) {
    $.ajax({
        type: "GET",
        url: 'http://localhost:8080/house?page=' + number,
        success: function (houses) {
            console.log(houses)
            htmlCard(houses.content)
            pagination(houses)
        }, error: function (error) {
            console.log(error)
        }
    })
}

function htmlCard(house) {
    let str = ""
    for (let i = 0; i < house.length; i++) {
        let idCa = "carousel" + house[i].id
        let idCaTarget = "#" + idCa;
        let cardImg = 'cardImg' + house[i].id;
        str += `
                <div class="col-4 mt-4">
                    <div class="card" style="width: 18rem;">
                      <div id="${idCa}" class="carousel slide" data-ride="carousel">
                          <div class="carousel-inner" id = "${cardImg}">
                            
                          </div>
                         <button class="carousel-control-prev" type="button" data-target="${idCaTarget}" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                          </button>
                          <button class="carousel-control-next" type="button" data-target="${idCaTarget}" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                          </button>
                        </div>
                      <div class="card-body">
                        <p>${house[i].name}</p>
                        <p>${house[i].address}</p>
                        <p>${house[i].price}</p>
                        <hr>
                        <button onclick="seeDetails(${house[i].id})">Xem chi tiết</button>
                      </div>
                    </div>
                </div>`
    }
    document.getElementById("houses").innerHTML = str;
    for (let i = 0; i < house.length; i++) {
        showImg(house[i].id)
    }
}

function pagination(houses) {
    let page = ``;
    let num = houses.pageable.pageNumber;
    console.log(num)
    if (num > 0 || num + 1 === houses.totalPages) {
        page += `<span onclick="showHouses(${num - 1})" style="color: #FFFFFF"><i class="fa-solid fa-circle-chevron-left"></i> Trước| </span>`
    }
    page += `<span style="color: white">${num + 1}/${houses.totalPages}</span>`
    if (num <= 0 || num + 1 !== houses.totalPages) {
        page += `<span onclick="showHouses(${num + 1})" style="color: #FFFFFF">  |<i class="fa-solid fa-circle-chevron-right"></i> Sau </span>`
    }

    document.getElementById("Pagination").innerHTML = page;
}

function seeDetails(id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/house/" + id,
        success: function (house) {
            console.log(house)
            htmlSeeDetail(house)
        }, error: function (error) {
            console.log(error)
        }
    })
}

function htmlSeeDetail(house) {
    document.getElementById("main").innerHTML =
        `
        <div class="container-fluid p-0" style="height: 90vh">
            <div class="row" style="background: #4caf8c;width: 100%">
                <h1 style="color: #FFFFFF;margin-left: 35%;"><img src="https://firebasestorage.googleapis.com/v0/b/comhut-6cb9a.appspot.com/o/output-onlinegiftools.gif?alt=media&token=6cdc0287-cd96-411d-bc4e-be950e86fa8e" style="width: 60px;height: 60px">
                XEM CHI TIẾT
                <img src="https://firebasestorage.googleapis.com/v0/b/comhut-6cb9a.appspot.com/o/output-onlinegiftools.gif?alt=media&token=6cdc0287-cd96-411d-bc4e-be950e86fa8e" style="width: 60px;height: 60px"></h1>
            </div>
            <div class="row" style="background: #4caf8c;width: 100%">
                <h1 style="color: #FFFFFF;margin-left: 20%;">CHÀO MỪNG BẠN ĐẾN ${house.name} !!</h1>
            </div>
            <div class="row mt-4" id="houseDetail">
                <table class="table" style="color: #eff6f2; margin-right: 30px">
                  <tbody>
                    <tr>
                      <th scope="row">Trạng thái</th>
                      <td id="statusHouse"></td>
                    </tr>
                    <tr>
                      <th scope="row">Địa chỉ</th>
                      <td>${house.address}</td>
                    </tr>
                    <tr>
                      <th scope="row">Số phòng ngủ</th>
                      <td>${house.bedroom}  <i class="fa-solid fa-bed-pulse"></i></td>
                    </tr>
                    <tr>
                      <th scope="row"> Số phòng tắm</th>
                      <td>${house.bathroom}  <i class="fa-solid fa-shower"></i></td>
                    </tr>
                    <tr>
                      <th scope="row">Mô tả</th>
                      <td>${house.description}</td>
                    </tr>
                    <tr>
                      <th scope="row">Giá tiền</th>
                      <td>${house.price}  <i class="fa-solid fa-sack-dollar"></i></td>
                    </tr>
                    <tr>
                      <th scope="row">Loại nhà</th>
                      <td>${house.idCategory.name}</td>
                    </tr>
                    
                    <tr>
                      <th scope="row">Chủ sở hữu</th>
                      <td>${house.idUserOwner.username}</td>
                    </tr>
                    <tr>
                      <th scope="row">Quất ngay</th>
                      <td><button style="background: #6bb4e8 ; width: 30%;border-radius: 50px" onclick="rent(${house.id} , ${house.price}, ${house.status})">Đặt</button></td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
        `
    if (house.status === 1) {
        document.getElementById("statusHouse").innerHTML = `Sẵn sàng`
    }
    if (house.status === 2) {
        document.getElementById("statusHouse").innerHTML = `Đang được thuê`
    }
    if (house.status === 3) {
        document.getElementById("statusHouse").innerHTML = `Đang sửa`
    }
}

function rent(idHouse, price, status) {
    if (localStorage.getItem(storageKey) === "") {
        document.getElementById("show_modal").innerHTML =
            `<div class="modal-content">
                    <div class="modal-header">
                        <h5>Thuê ngay</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="text-align: right;">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                           <p style="color: #4caf8c">Bạn chưa đăng nhập ? Nhấn OK để chuyển đến đăng nhập !</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button"  data-dismiss="modal" onclick="showRe_Log()">OK</button>
                    </div>
                </div>`
        jQuery.noConflict();
        $('#staticBackdrop').modal('show');
    } else if (status === 2) {
        document.getElementById("show_modal").innerHTML =
            `<div class="modal-content">
                    <div class="modal-header">
                        <h5>Thuê ngay</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="text-align: right;">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                           <p style="color: #4caf8c">Hiện tại nhà đang được thuê đến ngày vui lòng trở lại sau!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button"  data-dismiss="modal">OK</button>
                    </div>
                </div>`
        jQuery.noConflict();
        $('#staticBackdrop').modal('show');
    } else if (status === 3) {
        document.getElementById("show_modal").innerHTML =
            `<div class="modal-content">
                    <div class="modal-header">
                        <h5>Thuê ngay</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="text-align: right;">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                           <p style="color: #4caf8c">Hiện tại nhà đang được sửa vui lòng quay trở lại sau!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button"  data-dismiss="modal">OK</button>
                    </div>
                </div>`
        jQuery.noConflict();
        $('#staticBackdrop').modal('show');
    } else if (localStorage.getItem(storageKey) !== "") {
        document.getElementById("show_modal").innerHTML =
            `<div class="modal-content">
                    <div class="modal-header">
                        <h5>Thuê ngay</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="text-align: right;">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                           <p style="color: #4caf8c">Nhập ngày bắt đầu</p>
                           <input type="date" id="startTime">
                           <p style="color: #4caf8c">Nhập ngày kết thúc</p>
                           <input type="date" id="endTime" onchange="calculateTotalAmount(${price})"> 
                           <p></p>
                           <p style="color: #4caf8c" id="money"></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button"  data-dismiss="modal" onclick="handleRent(${idHouse} , ${price} , ${status})">Thuê</button>
                    </div>
                </div>`
        jQuery.noConflict();
        $('#staticBackdrop').modal('show');
    }
}

function calculateTotalAmount(price) {
    const get_day_of_time = (startTime, endTime) => {
        let ms1 = startTime.getTime();
        let ms2 = endTime.getTime();
        return Math.ceil((ms2 - ms1) / (24 * 60 * 60 * 1000));
    };
    let startTime = new Date(document.getElementById("startTime").value);
    let endTime = new Date(document.getElementById("endTime").value);
    let aboutDays = get_day_of_time(startTime, endTime);
    let total = price * aboutDays;
    document.getElementById("money").innerHTML = `Tổng tiền : ${total} <i class="fa-solid fa-money-bill-transfer"></i>`
}

function handleRent(id, price, status) {
    const get_day_of_time = (startTime, endTime) => {
        let ms1 = startTime.getTime();
        let ms2 = endTime.getTime();
        return Math.ceil((ms2 - ms1) / (24 * 60 * 60 * 1000));
    };
    let startTime = new Date(document.getElementById("startTime").value);
    let endTime = new Date(document.getElementById("endTime").value);
    let aboutDays = get_day_of_time(startTime, endTime);
    startTime = [startTime.getDate(), startTime.getMonth(), startTime.getFullYear()].join('-');
    endTime = [endTime.getDate(), endTime.getMonth(), endTime.getFullYear()].join('-');
    let idUser = parseInt(localStorage.getItem(storageKeyId));
    let total = price * aboutDays;
    let orderr = {
        idHouse: {
            id: id
        },
        idUser: {
            id: idUser
        },
        startTime: startTime,
        endTime: endTime,
        total: total
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem(storageKey)
        },
        type: "POST",
        url: "http://localhost:8080/oder",
        data: JSON.stringify(orderr),
        success: function () {
            let sta = 2;
            editStatus(id, sta);
        }, error: function (error) {
            console.log(error)
        }
    })

}

function editStatus(idHouse, sta) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/house/" + idHouse,
        success: function (house) {
            house['status'] = sta;
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
                    seeDetails(idHouse)
                }, error: function (error) {
                    console.log(error)
                }
            })
        }, error: function (error) {
            console.log(error)
        }
    })
}

function showImg(idHouse) {
    let str = ``
    let cardImg = 'cardImg' + idHouse;
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/images/" + idHouse,
        success: function (images) {
            for (let i = 0; i < images.length; i++) {
                if (i === 0) {
                    str += `<div class="carousel-item active">
                              <img src="${images[i].image}" class="imageC">
                            </div>`
                } else {
                    str += `<div class="carousel-item">
                              <img src="${images[i].image}" class="imageC">
                            </div>`
                }
            }
            document.getElementById(cardImg).innerHTML = str;

        }, error: function (error) {
            console.log(error)
        }
    })
}
