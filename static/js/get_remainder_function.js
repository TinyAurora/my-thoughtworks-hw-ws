// 求余
function get_remainder() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    if (check_input(GET_REMAINDER, num1, num2) === ISOK) {
        document.getElementById("result").innerHTML = (num1 % num2).toString();
    } else {
        document.getElementById("result").innerHTML = "请重新输入！";
        switch (check_input(GET_REMAINDER, num1, num2)) {
            case ISNULL: alert("错误：输入不能为空！"); break;
            case ISNAN: alert("错误：输入不能为其它字符类型！"); break;
            case ISSPACE: alert("错误：输入不能含有空格符！"); break;
            case ISZERO: alert("错误：第二个数不能为0！"); break;
            case ISILLEGALNUM: alert("错误：输入为非法数字，eg：'0000001', '03', '0004'！"); break;
        }
    }
}