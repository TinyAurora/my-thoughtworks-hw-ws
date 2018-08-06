// 定义错误类型
const ISNAN = 0;
const ISNULL = 1;
const ISZERO = 2;
const ISOK = 3;
// 求余
function get_remainder() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    switch (check_input_1(num1, num2)) {
        case ISNAN: document.getElementById("result").innerHTML = "注: 请确保输入为数字类型！"; break;
        case ISNULL: document.getElementById("result").innerHTML = "注: 请确保输入不含空字符！"; break;
        case ISZERO: document.getElementById("result").innerHTML = "注: 第二个数不能为0！"; break;
        case ISOK: document.getElementById("result").innerHTML = (num1 % num2).toString(); break;
    }
}
// 输入检查
function check_input_1(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {    // 输入不是数字
        return ISNAN;
    } else if (!(/^[0-9]+.?[0-9]*/).test(num1) || !(/^[0-9]+.?[0-9]*/).test(num2)) {    // 输入为空
        return ISNULL;
    } else if (Number(num2) === 0) {    // 除数为0
        return ISZERO;
    } else {                            // 输入正确
        return ISOK;
    }
} 