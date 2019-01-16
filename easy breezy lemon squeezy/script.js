var e = '';
var pow = 0;
var num = document.getElementsByClassName('number');
for (var i = 0; i < num.length; i++) {
	num[i].addEventListener('click',function(){
		if (pow == 1){
			e += this.id + ')';
			document.getElementById('history-value').innerText += this.id;
			pow = 0;
		}
		else
			document.getElementById('current-value').innerText += this.id;
	});
}

var op = document.getElementsByClassName('operator');
for (var i = 0; i < op.length; i++) {
	op[i].addEventListener('click', function(){

		if (this.id == 'clear'){
					document.getElementById('history-value').innerText = '';
					document.getElementById('current-value').innerText = '';
		}

		if (this.id == 'backspace'){
			var output = document.getElementById('current-value').innerText;
			if(output){
				output= output.substr(0,output.length-1);
				document.getElementById('current-value').innerText = output;
			}
		}

		if ((this.id == ')') || (this.id == '(')){
			if (this.id == ')'){
				document.getElementById('history-value').innerText += document.getElementById('current-value').innerText;
				e += document.getElementById('current-value').innerText;
			}
			document.getElementById('current-value').innerText = '';
			document.getElementById('history-value').innerText += this.id;
			e += this.id;
		}
		var name = this.innerText;
		if ((name == 'Sin') || (name == 'Cos') || (name == 'tg') || (name == 'ctg') || (name == 'log2') || (name == 'sqrt')){
			var x = document.getElementById('current-value').innerText;
			e += this.id + '(' + x + ')';
			document.getElementById('history-value').innerText += this.innerText + '(' + x + ')';
			document.getElementById('current-value').innerText = '';
		}
		name = this.id;
		if (name == 'Math.pow'){
			var x = document.getElementById('current-value').innerText;
			e += this.id + '(' + x + ',';
		  document.getElementById('current-value').innerText = '';
			document.getElementById('history-value').innerText = x + '^';
			pow = 1;
		}
		if ((name == '*') || (name =='+') || (name == '-') || (name == '/') || (name == '%')){
			var x = document.getElementById('current-value').innerText;
			e += x + this.id;
			document.getElementById('history-value').innerText += x + this.id;
			document.getElementById('current-value').innerText = '';
		}
		if (name == '='){
			if (e[e.length-1] != ')'){
				e += document.getElementById('current-value').innerText;
				document.getElementById('history-value').innerText += document.getElementById('current-value').innerText;
			}
			var result = eval(e);
			document.getElementById('history-value').innerText = '';
			document.getElementById('current-value').innerText = result;
			e = '';
		}
	});
}




















// function getHistory(){
// 	return document.getElementById("history-value").innerText;
// }
// function printHistory(num){
// 	document.getElementById("history-value").innerText=num;
// }
// function getOutput(){
// 	return document.getElementById("output-value").innerText;
// }
// function printOutput(num){
// 	if(num==""){
// 		document.getElementById("output-value").innerText=num;
// 	}
// 	else{
// 		document.getElementById("output-value").innerText=getFormattedNumber(num);
// 	}
// }
// function getFormattedNumber(num){
// 	if(num=="-"){
// 		return "";
// 	}
// 	var n = Number(num);
// 	var value = n.toLocaleString("en");
// 	return value;
// }
// function reverseNumberFormat(num){
// 	return Number(num.replace(/,/g,''));
// }
// var operator = document.getElementsByClassName("operator");
// for(var i =0;i<operator.length;i++){
// 	operator[i].addEventListener('click',function(){
// 		if(this.id=="clear"){
// 			printHistory("");
// 			printOutput("");
// 		}
// 		else if(this.id=="backspace"){
// 			var output=reverseNumberFormat(getOutput()).toString();
// 			if(output){//if output has a value
// 				output= output.substr(0,output.length-1);
// 				printOutput(output);
// 			}
// 		}
// 		else{
// 			var output=getOutput();
// 			var history=getHistory();
// 			if(output==""&&history!=""){
// 				if(isNaN(history[history.length-1])){
// 					history= history.substr(0,history.length-1);
// 				}
// 			}
// 			if(output!="" || history!=""){
// 				output= output==""?output:reverseNumberFormat(output);
// 				history=history+output;
// 				if(this.id=="="){
// 					var result=eval(history);
// 					printOutput(result);
// 					printHistory("");
// 				}
// 				else{
// 					history=history+this.id;
// 					printHistory(history);
// 					printOutput("");
// 				}
// 			}
// 		}
//
// 	});
// }
// var number = document.getElementsByClassName("number");
// for(var i =0;i<number.length;i++){
// 	number[i].addEventListener('click',function(){
// 		var output=reverseNumberFormat(getOutput());
// 		if(output!=NaN){ //if output is a number
// 			output=output+this.id;
// 			printOutput(output);
// 		}
// 	});
// }
