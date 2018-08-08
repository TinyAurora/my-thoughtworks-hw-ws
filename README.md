# my-thoughtworks-hw-ws  

## 项目介绍  
通过ngrok外网映射，将本地http服务器里的静态网页资源文件暴露在外网，供其他人访问。
（注：外网访问，视频文件可能加载不了，本地访问则可）     

## 目录结构  
my-thoughtworks-hw-ws&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; // 工作空间目录    
├─ README.md&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp; // 说明文档    
├─ static&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp; // 静态网页资源文件夹   
│&emsp;├─ index.html&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; // 静态网页     
│&emsp;├─ css  
│&emsp;│&emsp;└─ index_css.css&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; // 网页css样式  
│&emsp;├─ js  
│&emsp;│&emsp;├─ get_calculate_result_function.js&emsp;&emsp;&emsp;&emsp;&nbsp;&emsp; // JavaScript简单编程题-2，实现求相关值函数  
│&emsp;│&emsp;├─ get_lcd_of_num_function.js&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; // JavaScript中级编程题-2，实现数字转化为LCD符号函数  
│&emsp;│&emsp;├─ get_logic_answer_function.js&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; // 第二组逻辑题，实现求解逻辑题答案函数  
│&emsp;│&emsp;├─ get_remainder_function.js&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp; // JavaScript简单编程题-1，实现求余函数  
│&emsp;│&emsp;├─ get_sum_of_str_function.js&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp; // JavaScript中级编程题-1，实现字符串求和函数    
│&emsp;│&emsp;├─ index_js.js&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; // 实现网页选项卡切换显示函数   
│&emsp;│&emsp;└─ input_exception_function.js&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; // 实现输入异常类型检测函数    
│&emsp;└─ video&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; // 存放多种数据格式视频    
│&emsp;&emsp;&nbsp;&nbsp;├─ logic_example.mp4    
│&emsp;&emsp;&nbsp;&nbsp;├─ logic_example.ogg  
│&emsp;&emsp;&nbsp;&nbsp;├─ logic_example.swf  
│&emsp;&emsp;&nbsp;&nbsp;└─ logic_example.webm  
├─ ngrok.exe&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&emsp;&emsp; // ngrok外网映射程序  
├─ file_server.js&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; // 实现http文件服务器，读取上述静态网页资源   
└─ example_play.mp4&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; // 示例视频  

## 使用教程

## 问题记录
- js原型链问题--（constructor，prototype，proto）
- html,css,js执行顺序问题--（语句、变量顺序、作用域等）
- nodejs控制台输入readline问题--（单行、多行、非阻塞、异步、单线程）
- js回调函数问题
- isNaN问题--（空字符以及'1.', '1,'等）
- .vscode问题
- DOM操作问题--（嵌套类名等）
- 正则问题
- js数据结构问题--（链表、二叉树等）
- js内存问题--（实现过程中没出现过内存异常等问题？？）
- 网页布局问题--（手机上看或者调整pc上网页窗口大小会导致网页内容布局变乱）
- js http服务器工作模式（并发？性能？等）
- ngrok外网映射问题
- js html 传参问题
- js 不同文件函数调用问题 

## 参考资料
- https://c.runoob.com/codedemo/3163 
- https://github.com/michaelliao/learn-javascript/tree/master/samples/node/http
