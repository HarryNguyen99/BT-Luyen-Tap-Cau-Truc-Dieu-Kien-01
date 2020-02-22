function result() {
    let num1 = document.getElementById("numbera").value;
    let num2 = document.getElementById("numberb").value;

    let num3 = num1 % num2;
    if (num3 == 0) {
        document.getElementById("result2").innerHTML = "a chia hết cho b";
    } else {
        document.getElementById("result2").innerHTML = "a không chia hết cho b";
    }
}