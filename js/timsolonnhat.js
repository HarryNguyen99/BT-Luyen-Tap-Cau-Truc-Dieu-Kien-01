function result() {
    let numA = document.getElementById("num1").value;
    let numB = document.getElementById("num2").value;
    let numC = document.getElementById("num3").value;

    if (numA > numB && numA > numC) {
        document.getElementById("result1").innerHTML = "Số lớn nhất là a: " + numA;
    } else if (numB >numA && numB > numC) {
        document.getElementById("result1").innerHTML = "Số lớn nhất là b: " + numB;
    } else {
        document.getElementById("result1").innerHTML = "Số lớn nhất là c: " + numC;
    }
}