var UBERX = [8000, 12000, 10000, 2000];
var UBERSUV = [9000, 14000, 12000, 3000];
var UBERBLACK = [10000, 16000, 14000, 4000];

var uberX = document.getElementById("uberX");
var uberSuv = document.getElementById("uberSUV");
var uberBlack = document.getElementById("uberBlack");
var soKm = document.getElementById("soKM");
var thoiGian = document.getElementById("thoiGian");

var divThanhTien=document.getElementById("divThanhTien");
var xuatTien=document.getElementById("xuatTien");

function tinhTienXe(km, time, typeCar,typePrint) {
    let soKmValue = parseInt(km.value);
    let timeValue = parseInt(time.value);
    let money = 0;
    let txtHoaDon="";
    if (Number.isNaN(parseInt(timeValue))) {
        timeValue = 0;
    }

    if (soKmValue > 20) {
        money = typeCar[0] + 19 * typeCar[1] + (soKmValue - 20) * typeCar[2] + timeValue * typeCar[3];
        txtHoaDon=`1 km đầu: ${typeCar[0]} VNĐ.  Từ 1km - 20km: ${19*typeCar[1]} VNĐ. ${soKmValue-20} km tiếp theo: ${(soKmValue - 20) * typeCar[2]} VNĐ. Thời gian chờ: ${timeValue * typeCar[3]} VNĐ. Thành tiền: ${money} VNĐ`;
    }
    else if (1 < soKmValue && soKmValue <= 20) {
        money = typeCar[0] + (soKmValue - 1) * typeCar[1] + typeCar[3] * timeValue;
        txtHoaDon=`1 km đầu: ${typeCar[0]} VNĐ. ${soKmValue-1} km tiếp theo: ${(soKmValue - 1) * typeCar[1]} VNĐ. Thời gian chờ: ${timeValue * typeCar[3]} VNĐ. Thành tiền: ${money} VNĐ`;
    }
    else if (0 <= soKmValue && soKmValue < 2) {
        money = typeCar[0] + typeCar[3] * soKmValue;
        txtHoaDon=`1 km đầu: ${typeCar[0]} VNĐ. Thời gian chờ: ${timeValue * typeCar[3]} VNĐ. Thành tiền: ${money} VNĐ`;
    }
    if(typePrint===1)
    {
        return money;
    }
    else {
        return txtHoaDon;
    }
}
var tinhTien = document.getElementById("tinhTien").addEventListener("click", () => {
    let countMoney;
    if (uberX.checked) {
        countMoney = tinhTienXe(soKm, thoiGian, UBERX,1);
    }
    else if (uberSuv.checked) {
        countMoney = tinhTienXe(soKm, thoiGian, UBERSUV,1);
    }
    else {
        countMoney = tinhTienXe(soKm, thoiGian, UBERBLACK,1);
    }
    divThanhTien.style.display="block";
    divThanhTien.innerHTML=`Thành tiền: ${countMoney} vnd`;
});

var hoaDon=document.getElementById("hoaDon").addEventListener("click",()=>{
    let displayHoaDon;
    if (uberX.checked) {
        displayHoaDon = tinhTienXe(soKm, thoiGian, UBERX,2);
    }
    else if (uberSuv.checked) {
        displayHoaDon = tinhTienXe(soKm, thoiGian, UBERSUV,2);
    }
    else {
        displayHoaDon = tinhTienXe(soKm, thoiGian, UBERBLACK,2);
    }
    divThanhTien.style.display="block";
    divThanhTien.innerHTML=displayHoaDon;
})