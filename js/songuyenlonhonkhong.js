function result() {
    let number = document.getElementById("num").value;
    if (number == 0) {
        document.getElementById("result2").innerHTML = "Lớn bằng 0"
    } else if (number > 0) {
        document.getElementById("result2").innerHTML = "Lớn hơn 0"
    } else {
        document.getElementById("result2").innerHTML = "nhỏ hơn 0"
    }
}