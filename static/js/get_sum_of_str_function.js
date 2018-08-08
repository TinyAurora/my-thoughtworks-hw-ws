/* ThoughtWorks训练营作业之Javascript中级编程题-1 */

'use strict'

// 求解
function get_sum_of_str() {
    var inputNumStr = document.getElementById("inputNumStr").value;
    if (check_input(GET_STR_SUM, inputNumStr) === ISOK) {
        output_sum(inputNumStr);
    } else {
        document.getElementById("sum").innerHTML = "请重新输入！";
        switch (check_input(GET_STR_SUM, inputNumStr)) {
            case ISNAN: alert("错误：输入含有非法字符！"); break;
            case ISNULL: alert("错误：输入不能为空！"); break;
            case ISSPACE: alert("错误：输入不能含有空格符！"); break;
            case ISMINUS: alert("错误：输入不能为负数！"); break;
            case ISFLOAT: alert("错误：输入不能为小数！"); break;
        }
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

