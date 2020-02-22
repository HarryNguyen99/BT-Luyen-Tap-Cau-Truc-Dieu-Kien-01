function result() {
    let birth = document.getElementById("birthyear").value;
    if (birth >= 16) {
        document.getElementById("result2").innerHTML = "Đủ điều kiện vào lớp 10";
    } else {
        document.getElementById("result2").innerHTML = "Không đủ điều kiện vào lớp 10";
    }
}