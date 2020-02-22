function result() {
    let pointtest1 = document.getElementById("point1").value;
    let pointtest2 = document.getElementById("point1").value;
    let sun1 = parseInt(pointtest1);
    let sun2 = parseInt(pointtest2);
    let sun = (sun1 + sun2) / 2;
    switch (sun) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            document.getElementById("result1").innerHTML = "Điểm = " + sun + " Xếp loại yếu";
            break;
        case 5:
        case 6:
            document.getElementById("result1").innerHTML = "Điểm = " + sun + " Xếp loại trung bình";
            break;
        case 7:
        case 8:
            document.getElementById("result1").innerHTML = "Điểm = " + sun + " Xếp loại khá";
            break;
        case 9:
        case 10:
            document.getElementById("result1").innerHTML = "Điểm = " + sun + " Xếp loại giỏi";
            break;
        default :
            document.getElementById("result1").innerHTML = "Nhập sai điểm";

    }
}