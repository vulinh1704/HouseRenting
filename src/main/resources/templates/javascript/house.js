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
        let a = "#" + idCa;
        str += `
                <div class="col-4 mt-4">
                    <div class="card" style="width: 18rem;">
                      <div id="${idCa}" class="carousel slide" data-ride="carousel">
                          <div class="carousel-inner">
                            <div class="carousel-item active">
                              <img src="https://cdn.24h.com.vn/upload/2-2022/images/2022-05-25/junvu7-1653469403-325-width650height866.jpg" class="imageC">
                            </div>
                            <div class="carousel-item">
                              <img src="https://i.vietgiaitri.com/2020/9/3/gai-xinh-trung-quoc-bong-dung-noi-tieng-vi-nhu-chi-em-voi-jennie-co-giong-that-khong-dbd-5205788.jpg" class="imageC">
                            </div>
                            <div class="carousel-item">
                              <img src="https://anhdephd.vn/wp-content/uploads/2022/04/anh-gai-xinh-viet-nam-cute-1.jpg" class="imageC">
                            </div>
                          </div>
                         <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                          </button>
                          <button class="carousel-control-next" type="button" data-target="${a}" data-slide="next">
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
        <div class="container-fluid p-0">
            <div class="row" style="background: #4caf8c;width: 100%">
                <h1 style="color: #FFFFFF;margin-left: 35%;"><img src="https://firebasestorage.googleapis.com/v0/b/comhut-6cb9a.appspot.com/o/output-onlinegiftools.gif?alt=media&token=6cdc0287-cd96-411d-bc4e-be950e86fa8e" style="width: 60px;height: 60px">
                XEM CHI TIẾT
                <img src="https://firebasestorage.googleapis.com/v0/b/comhut-6cb9a.appspot.com/o/output-onlinegiftools.gif?alt=media&token=6cdc0287-cd96-411d-bc4e-be950e86fa8e" style="width: 60px;height: 60px"></h1>
            </div>
            <div class="row" style="background: #4caf8c;width: 100%">
                <h1 style="color: #FFFFFF;margin-left: 20%;">CHÀO MỪNG BẠN ĐẾN ${house.name} !!</h1>
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