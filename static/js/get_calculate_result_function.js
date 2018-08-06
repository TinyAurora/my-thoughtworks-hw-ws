function check_input_2(inputStr) {
    var inputArray = inputStr.split(',');
    var count = 0;
    for (var i = 0; i < inputArray.length; i++) {
        if ((!isNaN(inputArray[i]) || inputArray[i] === ',') && inputArray[i] !== ' ') {
            count++;
        }
    }
    alert('hh' + count + 'chang' + inputArray.length);

    if (count === inputArray.length) {
        return true;
    } else {
        return false;
    }  
}

function get_result() {
    var inputStr = document.getElementById("inputStr").value;
    if (check_input_2(inputStr)) {
        var inputArray = inputStr.split(",").map(function char2num(c) { return Number(c); });
        var sequence = new Sequence(inputArray);
        document.getElementById("min").innerHTML = " o) 最小值 = " + sequence.minimum();
        document.getElementById("max").innerHTML = " o) 最大值 = " + sequence.maximun();
        document.getElementById("nums").innerHTML = " o) 元素数量 = " + sequence.get_length();
        document.getElementById("average").innerHTML = " o) 平均值 = " + sequence.average();
    } else {
        document.getElementById("min").innerHTML = "输入数据格式错误，请重新输入！";
    }
}

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