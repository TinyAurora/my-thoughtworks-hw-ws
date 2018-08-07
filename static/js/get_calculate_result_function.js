// 输入检查
function check_input_2(inputStr) {
    var inputArray = inputStr.split(",");
    var inputStr = inputStr.replace(",", "");
    if (inputStr === '') {                        // 输入为空
        return ISNULL;
    } else if (inputStr.indexOf(" ") !== -1) {    // 输入含有空格
        return ISSPACE;
    } else {
        for (var i = 0; i < inputArray.length; i++) {
            if (isNaN(inputArray[i])) {
                return ISNAN;                     // 输入含有非法字符
            }
            if (Number(inputArray[i][0]) === 0) {       // 输入为非法数字
                return ISILLEGALNUM;
            }
        }
        return ISOK;                              // 输入合法
    } 
}

// 输出
function output(inputStr) {
    var inputArray = inputStr.split(",").map(function char2num(c) { return Number(c); });
    var sequence = new Sequence(inputArray);
    document.getElementById("min").innerHTML = " o) 最小值 = " + sequence.minimum();
    document.getElementById("max").innerHTML = " o) 最大值 = " + sequence.maximun();
    document.getElementById("nums").innerHTML = " o) 元素数量 = " + sequence.get_length();
    document.getElementById("average").innerHTML = " o) 平均值 = " + sequence.average();
}

// 得到结果
function get_result() {
    var inputStr = document.getElementById("inputStr").value;
    switch (check_input_2(inputStr)) {
        case ISNAN: alert("错误：输入含有非法字符！"); break;
        case ISNULL: alert("错误：输入不能为空！"); break;
        case ISSPACE: alert("错误：输入不能含有空格符！"); break;
        case ISILLEGALNUM: alert("错误：输入为非法数字，eg：'0000001', '03', '0004'！"); break;
        case ISOK: output(inputStr); break;
    }
}

// 序列类
class Sequence {
    constructor(input) {
        if (input instanceof Array) {
        if (input.length == 0) {
            console.log("The input is empty.");
        } else {
            this.input = input;
        }
        } else {
        console.log("The input is not an array.");
        }
    }

    minimum() {
        var min = this.input[0];
        for (var i = 1; i < this.input.length; i++) {
        if (this.input[i] < min) {
            min = this.input[i];
        }
        }
        return min;
    }

    maximun() {
        var max = this.input[0];
        for (var i = 1; i < this.input.length; i++) {
        if (this.input[i] > max) {
            max = this.input[i];
        }
        }
        return max;
    }

    get_length() {
        return this.input.length;
    }

    average() {
        var sum = 0;
        for (var i = 0; i < this.input.length; i++) {
        sum += this.input[i];
        }
        return (sum / this.input.length).toFixed(2);
    }
}