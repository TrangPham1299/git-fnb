let chieuCao = 123;

// Lấy phần số lẻ (tức là phần hàng chục và đơn vị)
let soLe = chieuCao % 100;

// Tính toán cân nặng
let canNangLyTuong = soLe * 9.0 / 10;
let canNangToiDa = soLe;
let canNangToiThieu = soLe * 8.0 / 10;

console.log("Cân nặng lý tưởng:" + canNangLyTuong 
+ " Cân nặng tối đa: " + canNangToiDa 
+ " Cân nặng tối thiểu: " + canNangToiThieu)