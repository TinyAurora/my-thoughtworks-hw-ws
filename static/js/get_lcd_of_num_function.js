function check_input_4(inputStr) {
    return true;
}

function get_lcd_of_num() {
    var inputStr = document.getElementById("inputNum").value;

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