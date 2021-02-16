
var operation = "0";
var modFlag = true;
document.getElementById("myRes").innerHTML = operation;

//Numbers
function press1() {
	if(operation.charAt(operation.length-1)!='r' && modFlag)
		operation = (operation == "0") ? "1" : operation + "1";
	document.getElementById("myRes").innerHTML = operation;
}

function press2() {
	if(operation.charAt(operation.length-1)!='r' && modFlag)
		operation = (operation == "0") ? "2" : operation + "2";
	document.getElementById("myRes").innerHTML = operation;	
}

function press3() {
	if(operation.charAt(operation.length-1)!='r' && modFlag)
		operation = (operation == "0") ? "3" : operation + "3";
	document.getElementById("myRes").innerHTML = operation;
}

function press4() {
	if(operation.charAt(operation.length-1)!='r' && modFlag)
		operation = (operation == "0") ? "4" : operation + "4";
	document.getElementById("myRes").innerHTML = operation;
}

function press5() {
	if(operation.charAt(operation.length-1)!='r' && modFlag)
		operation = (operation == "0") ? "5" : operation + "5";
	document.getElementById("myRes").innerHTML = operation;
}

function press6() {
	if(operation.charAt(operation.length-1)!='r' && modFlag)
		operation = (operation == "0") ? "6" : operation + "6";
	document.getElementById("myRes").innerHTML = operation;
}

function press7() {
	if(operation.charAt(operation.length-1)!='r' && modFlag)
		operation = (operation == "0") ? "7" : operation + "7";
	document.getElementById("myRes").innerHTML = operation;
}

function press8() {
	if(operation.charAt(operation.length-1)!='r' && modFlag)
		operation = (operation == "0") ? "8" : operation + "8";
	document.getElementById("myRes").innerHTML = operation;
}

function press9() {
	if(operation.charAt(operation.length-1)!='r' && modFlag)
		operation = (operation == "0") ? "9" : operation + "9";
	document.getElementById("myRes").innerHTML = operation;
}

function press0() {
	if(operation.charAt(operation.length-1)!='r' && modFlag)
		operation = (operation == "0") ? "0" : operation + "0";
	document.getElementById("myRes").innerHTML = operation;
}

function press000() {
	if(operation.charAt(operation.length-1)!='r' && modFlag)	
		operation = (operation == "0") ? "0" : operation + "000";
	document.getElementById("myRes").innerHTML = operation;
}

function pressDot() {
	let dotFlag = false;
	if(modFlag) {
		for (let i=0 ; i<operation.length ; i+=1) {
			if(operation.charAt(i)=='.') dotFlag = true;
			if(operation.charAt(i)=='+' && i!=operation.length-1) dotFlag = false;
			if(operation.charAt(i)=='-' && i!=operation.length-1) dotFlag = false;
			if(operation.charAt(i)=='*' && i!=operation.length-1) dotFlag = false;
			if(operation.charAt(i)=='/' && i!=operation.length-1) dotFlag = false;
			if(operation.charAt(i)=='^' && i!=operation.length-1) dotFlag = false;

		}
		if(!dotFlag) operation = operation + ".";
	}
	document.getElementById("myRes").innerHTML = operation;
}

//Operands
function pressPlus() {
	let operFlag = false;
	if(modFlag) {
		for (let i=0 ; i<operation.length ; i+=1) {
			if(operation.charAt(i)=='+') operFlag = true;
			if(operation.charAt(i)=='-') operFlag = true;
			if(operation.charAt(i)=='*') operFlag = true;
			if(operation.charAt(i)=='/') operFlag = true;
			if(operation.charAt(i)=='^') operFlag = true;
			if(operation.charAt(i)=='r') operFlag = true;
			if(operation.charAt(i)=='.' && i==operation.length-1) operFlag = true;
		}
		if(!operFlag) operation = operation + "+";
	}
	document.getElementById("myRes").innerHTML = operation;
}

function pressMinus() {
	let operFlag = false;
	if(modFlag) {
		for (let i=0 ; i<operation.length ; i+=1) {
			if(operation.charAt(i)=='+') operFlag = true;
			if(operation.charAt(i)=='-') operFlag = true;
			if(operation.charAt(i)=='*') operFlag = true;
			if(operation.charAt(i)=='/') operFlag = true;
			if(operation.charAt(i)=='^') operFlag = true;
			if(operation.charAt(i)=='r') operFlag = true;
			if(operation.charAt(i)=='.' && i==operation.length-1) operFlag = true;
		}
		if(!operFlag) operation = operation + "-";
	}
	document.getElementById("myRes").innerHTML = operation;
}

function pressTimes() {
	let operFlag = false;
	if(modFlag) {
		for (let i=0 ; i<operation.length ; i+=1) {
			if(operation.charAt(i)=='+') operFlag = true;
			if(operation.charAt(i)=='-') operFlag = true;
			if(operation.charAt(i)=='*') operFlag = true;
			if(operation.charAt(i)=='/') operFlag = true;
			if(operation.charAt(i)=='^') operFlag = true;
			if(operation.charAt(i)=='r') operFlag = true;
			if(operation.charAt(i)=='.' && i==operation.length-1) operFlag = true;
		}
		if(!operFlag) operation = operation + "*";
	}
	document.getElementById("myRes").innerHTML = operation;
}

function pressDiv() {
	let operFlag = false;
	if(modFlag) {
		for (let i=0 ; i<operation.length ; i+=1) {
			if(operation.charAt(i)=='+') operFlag = true;
			if(operation.charAt(i)=='-') operFlag = true;
			if(operation.charAt(i)=='*') operFlag = true;
			if(operation.charAt(i)=='/') operFlag = true;
			if(operation.charAt(i)=='^') operFlag = true;
			if(operation.charAt(i)=='r') operFlag = true;
			if(operation.charAt(i)=='.' && i==operation.length-1) operFlag = true;
		}
		if(!operFlag) operation = operation + "/";
	}
	document.getElementById("myRes").innerHTML = operation;
}

function pressSqrt() {
	let operFlag = false;
	if(modFlag) {
		for (let i=0 ; i<operation.length ; i+=1) {
			if(operation.charAt(i)=='+') operFlag = true;
			if(operation.charAt(i)=='-') operFlag = true;
			if(operation.charAt(i)=='*') operFlag = true;
			if(operation.charAt(i)=='/') operFlag = true;
			if(operation.charAt(i)=='^') operFlag = true;
			if(operation.charAt(i)=='r') operFlag = true;
			if(operation.charAt(i)=='.' && i==operation.length-1) operFlag = true;
		}
		if(!operFlag) operation = operation + "r";
	}
	document.getElementById("myRes").innerHTML = operation;
}

function pressExp() {
	let operFlag = false;
	if(modFlag) {
		for (let i=0 ; i<operation.length ; i+=1) {
			if(operation.charAt(i)=='+') operFlag = true;
			if(operation.charAt(i)=='-') operFlag = true;
			if(operation.charAt(i)=='*') operFlag = true;
			if(operation.charAt(i)=='/') operFlag = true;
			if(operation.charAt(i)=='^') operFlag = true;
			if(operation.charAt(i)=='r') operFlag = true;
			if(operation.charAt(i)=='.' && i==operation.length-1) operFlag = true;
		}
		if(!operFlag) operation = operation + "^";
	}
	document.getElementById("myRes").innerHTML = operation;
}

//Actions
function pressEqual() {
	let operand="", operfinder;
	let exps;
	let result, restr;
	let filter=0, deciFlag=false;

	//Validate operation expression
	if(operation.charAt(operation.length-1)=='0' ||
	operation.charAt(operation.length-1)=='1' ||
	operation.charAt(operation.length-1)=='2' ||
	operation.charAt(operation.length-1)=='3' ||
	operation.charAt(operation.length-1)=='4' ||
	operation.charAt(operation.length-1)=='5' ||
	operation.charAt(operation.length-1)=='6' ||
	operation.charAt(operation.length-1)=='7' ||
	operation.charAt(operation.length-1)=='8' ||
	operation.charAt(operation.length-1)=='9' ||
	operation.charAt(operation.length-1)=='r') {

		//Shut down modifications
		modFlag = false;

		//Find operand
		operfinder = operation.indexOf('+');
		if(operfinder!=-1) operand = '+';
		operfinder = operation.indexOf('-');
		if(operfinder!=-1) operand = '-';
		operfinder = operation.indexOf('*');
		if(operfinder!=-1) operand = '*';
		operfinder = operation.indexOf('/');
		if(operfinder!=-1) operand = '/';
		operfinder = operation.indexOf('^');
		if(operfinder!=-1) operand = '^';
		operfinder = operation.indexOf('r');
		if(operfinder!=-1) operand = 'r';

		//Get both expressions of operation if there is an operand
		if(operand != "") exps = operation.split(operand);

		//Perform operation
		switch(operand) {
			case '+':
				result = Number(exps[0]) + Number(exps[1]);
				break;
			case '-':
				result = Number(exps[0]) - Number(exps[1]);
				break;
			case '*':
				result = Number(exps[0]) * Number(exps[1]);
				break;
			case '/':
				result = Number(exps[0]) / Number(exps[1]);
				break;
			case '^':
				result = Math.pow(Number(exps[0]),Number(exps[1]));
				break;
			case 'r':
				result = Math.sqrt(Number(exps[0]));
				break;
			default:
				break;
		}
		restr = result.toString();
		for (let i=0 ; i<restr.length ; i+=1) {
			if(restr.charAt(i+1)=='0' &&
			restr.charAt(i+2)=='0' &&
			restr.charAt(i+3)=='0' &&
			restr.charAt(i+4)=='0' && deciFlag) {
				filter += 1;
				break;
			}
			if(deciFlag) filter += 1;
			if(restr.charAt(i)=='.') deciFlag = true;
		}
		operation = "" + result.toFixed(filter);
	}
	document.getElementById("myRes").innerHTML = operation;
}

function pressClear() {
	//Reset calculator
	operation = "0";
	modFlag = true;
	document.getElementById("myRes").innerHTML = operation;
}
