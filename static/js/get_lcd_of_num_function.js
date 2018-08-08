// 输入检查
function check_input_4(inputStr) {
    if (inputStr === "") {                                // 输入为空
        return ISNULL;
    } else if (isNaN(inputStr) || isNaN(inputStr[inputStr.length - 1])) {   // 输入含有非法字符
        return ISNAN;
    } else if (Number(inputStr.indexOf(" ")) !== -1) {    // 输入含有空格
        return ISSPACE;
    } else if (Number(inputStr.indexOf("-")) !== -1) {    // 输入不能为负数
        return ISMINUS;
    } else if (Number(inputStr.indexOf(".")) !== -1) {    // 输入不能为小数
        return ISFLOAT;
    } else {                                                 // 输入合法
        return ISOK;
    }
}

// 清除输出lcd
function clear_lcd() {
    document.getElementById("line_1").innerHTML = "请重新输入！";
    document.getElementById("line_2").innerHTML = "";
    document.getElementById("line_3").innerHTML = "";
}

// 得到结果
function get_lcd_of_num() {
    var inputStr = document.getElementById("inputNum").value;
    if (check_input_4(inputStr) === ISOK) {
        output_lcd(inputStr);
    } else {
        clear_lcd();
        switch (check_input_4(inputStr)) {
            case ISNAN: alert("错误：输入含有非法字符！"); break;
            case ISNULL: alert("错误：输入不能为空！"); break;
            case ISSPACE: alert("错误：输入不能含有空格符！"); break;
            case ISMINUS: alert("错误：输入不能为负数！"); break;
            case ISFLOAT: alert("错误：输入不能为小数！"); break;
        }
    }
}

// 输出
function output_lcd(inputStr) {
    // 数字符号映射表
    var numSign = {
        '0' : ['._.', '|. |', '|_|'],
        '1' : ['.. .', '.. |', '.. |'],
        '2' : ['._.', '._|', '|_.'],
        '3' : ['._.', '._|', '._|'],
        '4' : ['.. .', '|_|', '.. |'],
        '5' : ['._.', '|_.', '._|'],
        '6' : ['._.', '|_.', '|_|'],
        '7' : ['._.', '.. |', '.. |'],
        '8' : ['._.', '|_|', '|_|'],
        '9' : ['._.', '|_|', '.. |']
    };

    const LINE = 3;    // 分三行扫描输出
    var outputStr = '';
    var len = inputStr.length;

    for (var i = 0; i < LINE; i++) {     
        for (var j = 0; j < len; j++) {
            outputStr += numSign[inputStr[j]][i];
            if (j != len - 1) {    // 每行最后一个符号不加空格符，其余均加空格符
                outputStr += ' ';
            }
        }
        outputStr += '\n';
    }
    outputStr = outputStr.split('\n');
    document.getElementById("line_1").innerHTML = outputStr[0];
    document.getElementById("line_2").innerHTML = outputStr[1];
    document.getElementById("line_3").innerHTML = outputStr[2];
}