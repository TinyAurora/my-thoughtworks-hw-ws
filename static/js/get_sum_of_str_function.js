// 输入检查
function check_input_3(inputNumStr) {
    if (inputNumStr === "") {                                // 输入为空
        return ISNULL;
    } else if (isNaN(inputNumStr) || isNaN(inputNumStr[inputNumStr.length - 1])) {   // 输入含有非法字符
        return ISNAN;
    } else if (Number(inputNumStr.indexOf(" ")) !== -1) {    // 输入含有空格
        return ISSPACE;
    } else if (Number(inputNumStr.indexOf("-")) !== -1) {    // 输入不能为负数
        return ISMINUS;
    } else if (Number(inputNumStr.indexOf(".")) !== -1) {    // 输入不能为小数
        return ISFLOAT;
    } else {                                                 // 输入合法
        return ISOK;
    }
}

// 输出
function output_sum(inputNumStr) {
    var sum = 0;
    for (var i = 0; i < inputNumStr.length; i++) {
        sum += Number(inputNumStr[i]);
    }
    document.getElementById("sum").innerHTML = String(sum);
}

// 求解
function get_sum_of_str() {
    var inputNumStr = document.getElementById("inputNumStr").value;
    if (check_input_3(inputNumStr) === ISOK) {
        output_sum(inputNumStr);
    } else {
        document.getElementById("sum").innerHTML = "请重新输入！";
        switch (check_input_3(inputNumStr)) {
            case ISNAN: alert("错误：输入含有非法字符！"); break;
            case ISNULL: alert("错误：输入不能为空！"); break;
            case ISSPACE: alert("错误：输入不能含有空格符！"); break;
            case ISMINUS: alert("错误：输入不能为负数！"); break;
            case ISFLOAT: alert("错误：输入不能为小数！"); break;
        }
    }
}