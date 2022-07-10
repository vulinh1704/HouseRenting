function findAllOder() {
    if (localStorage.getItem(storageKeyId) === "") {
        noticeToLogin()
    }
    if (localStorage.getItem(storageKeyId) !== "") {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/oder/byIdUser/" + localStorage.getItem(storageKeyId),
            success: function (orders) {
                console.log('order' , orders)
                htmlOrder(orders);
            }, error: function (error) {
                console.log(error)
            }
        })
    }
}

function htmlOrder(orders) {
    document.getElementById("main").innerHTML =
        `
        <div class="container-fluid p-0">
            <div class="row" style="background: #4caf8c;width: 100%">
                <h1 style="color: #FFFFFF;margin-left: 30%;"><img src="https://firebasestorage.googleapis.com/v0/b/comhut-6cb9a.appspot.com/o/output-onlinegiftools.gif?alt=media&token=6cdc0287-cd96-411d-bc4e-be950e86fa8e" style="width: 60px;height: 60px">HÓA ĐƠN CỦA BẠN
                <img src="https://firebasestorage.googleapis.com/v0/b/comhut-6cb9a.appspot.com/o/output-onlinegiftools.gif?alt=media&token=6cdc0287-cd96-411d-bc4e-be950e86fa8e" style="width: 60px;height: 60px"></h1>
            </div>
            <div class="row" style="background: #4caf8c;width: 100%">
                <h1 style="color: #FFFFFF;margin-left: 31%;">DANH SÁCH HÓA ĐƠN !!</h1>
            </div>
            <div class="row mt-3" style="height: 90vh">
                <div class="col-12">
                    <table class="table" style="color: #eff6f2; margin-right: 30px">
                            <tr>
                                <th>Bạn</th>
                                <th>Tên nhà</th>
                                <th>Ngày bắt đầu</th>
                                <th>Ngày kết thúc</th>
                                <th>Tiền thu được</th>
                                <th>Trạng thái</th>
                                <th>Hủy đơn</th>
                            </tr>
                            <tbody id="orderList">
                                
                           </tbody>
                    </table>
                </div>
            </div>
        </div>
        `
    let str = ``
    let sta = 1;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].idHouse.status === 2) {
            str += ` <tr>
                      <td>${orders[i].idUser.username}</td>
                      <td>${orders[i].idHouse.name}</td>
                      <td>${orders[i].startTime}</td>
                      <td>${orders[i].endTime}</td>
                      <td>${orders[i].total}</td>
                      <td>Đang được thuê</td>
                      <td><button style="background-color:pink" onclick="cancellationNotice(${orders[i].idHouse.id} , ${sta})">Hủy đơn</button></td>
                    </tr>`
        }
    }
    document.getElementById("orderList").innerHTML = str;
}

function noticeToLogin() {
    document.getElementById("show_modal").innerHTML =
        `<div class="modal-content">
                    <div class="modal-header">
                        <h5>Thông báo</h5>
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
}

function cancellationNotice(idHouse , sta){
    document.getElementById("show_modal").innerHTML =
        `<div class="modal-content">
                    <div class="modal-header">
                        <h5>Thông báo</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="text-align: right;">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                           <p style="color: #4caf8c">Bạn muốn hủy đơn này ?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button"  data-dismiss="modal" onclick="editStatusOrder(${idHouse}, ${sta})">OK</button>
                    </div>
                </div>`
    jQuery.noConflict();
    $('#staticBackdrop').modal('show');
}

function editStatusOrder(idHouse , sta){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/house/" + idHouse,
        success: function (house) {
            house['status'] = sta;
            $.ajax({
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem(storageKey)
                },
                type: "PUT",
                url: "http://localhost:8080/house/" + idHouse,
                data: JSON.stringify(house),
                success: function () {
                    findAllOder()
                }, error: function (error) {
                    console.log(error)
                }
            })
        }, error: function (error) {
            console.log(error)
        }
    })
}