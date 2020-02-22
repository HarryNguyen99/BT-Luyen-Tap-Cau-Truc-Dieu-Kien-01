function result() {
    let bill1 = document.getElementById("bill").value;
    let commission = null;
    if (0 < bill1 <= 200000) {
        commission = bill1 * (3 / 100);
        document.getElementById("result1").innerHTML = "Hoa Hồng = " + commission + " VNĐ";
       //alert(commission);
    } else if (200000 > bill1 <= 500000) {
        commission = (200000 * (3 / 100)) + ((bill1 - 200000) * (5 / 100));
        document.getElementById("result1").innerHTML = "Hoa Hồng = " + commission + " VNĐ";
        // alert(commission);
    } else
        commission = (200000 * (3 / 100)) + ((500000 - 200000) * (5 / 100)) + ((bill1 - 500000) * (10 / 100));
        document.getElementById("result1").innerHTML = "Hoa Hồng = " + commission + " VNĐ";
}