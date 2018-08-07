// 定义错误类型
const ISNULL = 0;        // 没有输入，eg：''
const ISNAN = 1;         // 输入不是数字，eg：'十度非ddsdqq.,./;'
const ISSPACE = 2;       // 输入含有空格符，eg：'123 345 5 67'
const ISZERO = 3;        // 第二个数不能为0，eg：2 % 0，除数不能为0
const ISILLEGALNUM = 4;  // 输入为非法数字，eg：'0000001', '03', '0004'
const ISOK = 5;          // 输入合法（允许负数、小数情况存在）
// 求余
function get_remainder() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    switch (check_input_1(num1, num2)) {
        case ISNULL: alert("错误：输入不能为空！"); break;
        case ISNAN: alert("错误：输入不能为其它字符类型！"); break;
        case ISSPACE: alert("错误：输入不能含有空格符！"); break;
        case ISZERO: alert("错误：第二个数不能为0！"); break;
        case ISILLEGALNUM: alert("错误：输入为非法数字，eg：'0000001', '03', '0004'！"); break;
        case ISOK: document.getElementById("result").innerHTML = (num1 % num2).toString(); break;
    }
}
// 输入检查
function check_input_1(num1, num2) {
    if (num1 === '' || num2 === '') {    // 输入为空
        return ISNULL;
    } else if (isNaN(num1) || isNaN(num2) || isNaN(num1[num1.length - 1]) || isNaN(num2[num2.length - 1])) {    // 输入含有非法字符
        return ISNAN;
    } else if (!(/^[0-9]+.?[0-9]*/).test(num1) || !(/^[0-9]+.?[0-9]*/).test(num2)) {    // 输入含有空格
        return ISSPACE;
    } else if (Number(num2) === 0) {    // 除数为0
        return ISZERO;
    } else if (Number(num1[0]) === 0 || Number(num2[0]) === 0) {          // 输入为非法数字
        return ISILLEGALNUM;
    } else {                            // 输入正确
        return ISOK;
    }
} 