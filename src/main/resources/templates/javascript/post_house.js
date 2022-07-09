function htmlPostHouse() {
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
                          <td><input type="text" placeholder="Tên"></td>
                        </tr>
                        <tr>
                          <th scope="col">Địa chỉ</th>
                          <td><input type="text" placeholder="Địa chỉ"></td>
                        </tr>
                        <tr>
                          <th scope="col">Số phòng ngủ</th>
                          <td><input type="text" placeholder="Số phòng ngủ" style="width: 50%; margin-right: 100%"></td>
                        </tr>
                        <tr>
                          <th scope="col">Số phòng tắm</th>
                          <td><input type="text" placeholder="Số phòng tắm" style="width: 50%; margin-right: 100%"></td>
                        </tr>
                        <tr>
                          <th scope="col">Giá tiền</th>
                          <td><input type="text" placeholder="Giá tiền" style="width: 50%; margin-right: 100%"></td>
                        </tr>
                        <tr>
                          <th scope="col">Trạng thái căn nhà</th>
                          <td><select id="statusHouseAdd" style="margin-right: 100%">
                                 <option value="1">Sẵn sàng</option>
                                 <option value="2">Đang được thuê</option>
                                 <option value="1">Trống</option>
                                </select></td>
                        </tr>
                        <tr>
                          <th scope="col">Mô tả thêm</th>
                          <td><input type="textarea" placeholder="Mô tả" style="width: 100% ;height: 100px;"></td>
                        </tr>
                        <tr>
                          <th scope="col">Ảnh</th>
                          <td><input type="file" value="upload" accept=".jpg" id="fileButton" onchange="upload(event)"></td>
                        </tr>
                        <tr>
                          <th scope="col"></th>
                          <td><button style="background-color: #0095ff">Đăng ngay</button></td>
                        </tr>
                    </table>
                </div>
            </div>             
`
}