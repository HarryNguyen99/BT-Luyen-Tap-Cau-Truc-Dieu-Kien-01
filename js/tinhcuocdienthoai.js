function result() {
    let date1 = document.getElementById("date").value;
    let charges = null;
    if (0 < date1 <= 31){
        charges = (49000/31) * date1;
        document.getElementById("result1").innerHTML = "Hóa Đơn Điện Thoại = " + charges + " VNĐ";
    }else {
        document.getElementById("result1").innerHTML = "Nhập sai ngày, nhập lại";
    }

}