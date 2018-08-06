function check_input_3(inputNumStr) {
    return true;
}

function get_sum_of_str() {
    var inputNumStr = document.getElementById("inputNumStr").value;
    var sum = 0;
    for (var i = 0; i < inputNumStr.length; i++) {
        sum += Number(inputNumStr[i]);
    }
    document.getElementById("sum").innerHTML = String(sum);
}