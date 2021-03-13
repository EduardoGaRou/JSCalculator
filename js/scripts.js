
var operation = "0";
var modFlag = true;
var subsCnt = 0;

document.getElementById("myRes").innerHTML = operation;

typeCheck();

//Displays
function typeCheck() {
	if(document.getElementById('simple').checked) {
		document.getElementById('calc1').style.display = 'flex';
		document.getElementById('calc2').style.display = 'none';
		operation = "0";
		modFlag = true;
	}
	else {
		document.getElementById('calc1').style.display = 'none';
		document.getElementById('calc2').style.display = 'flex';
		operation = "0";
		modFlag = true;
	}
	document.getElementById("myRes").innerHTML = operation;
}

//Numbers
function press1() {
	if(operation.charAt(operation.length-1)!='n' &&
	operation.charAt(operation.length-1)!='p' &&
	operation.charAt(operation.length-1)!='s' && modFlag)
		operation = (operation == "0") ? "1" : operation + "1";
	document.getElementById("myRes").innerHTML = operation;
}

function press2() {
	if(operation.charAt(operation.length-1)!='n' &&
	operation.charAt(operation.length-1)!='p' &&
	operation.charAt(operation.length-1)!='s' && modFlag)
		operation = (operation == "0") ? "2" : operation + "2";
	document.getElementById("myRes").innerHTML = operation;	
}

function press3() {
	if(operation.charAt(operation.length-1)!='n' &&
	operation.charAt(operation.length-1)!='p' &&
	operation.charAt(operation.length-1)!='s' && modFlag)
		operation = (operation == "0") ? "3" : operation + "3";
	document.getElementById("myRes").innerHTML = operation;
}

function press4() {
	if(operation.charAt(operation.length-1)!='n' &&
	operation.charAt(operation.length-1)!='p' &&
	operation.charAt(operation.length-1)!='s' && modFlag)
		operation = (operation == "0") ? "4" : operation + "4";
	document.getElementById("myRes").innerHTML = operation;
}

function press5() {
	if(operation.charAt(operation.length-1)!='n' &&
	operation.charAt(operation.length-1)!='p' &&
	operation.charAt(operation.length-1)!='s' && modFlag)
		operation = (operation == "0") ? "5" : operation + "5";
	document.getElementById("myRes").innerHTML = operation;
}

function press6() {
	if(operation.charAt(operation.length-1)!='n' &&
	operation.charAt(operation.length-1)!='p' &&
	operation.charAt(operation.length-1)!='s' && modFlag)
		operation = (operation == "0") ? "6" : operation + "6";
	document.getElementById("myRes").innerHTML = operation;
}

function press7() {
	if(operation.charAt(operation.length-1)!='n' &&
	operation.charAt(operation.length-1)!='p' &&
	operation.charAt(operation.length-1)!='s' && modFlag)
		operation = (operation == "0") ? "7" : operation + "7";
	document.getElementById("myRes").innerHTML = operation;
}

function press8() {
	if(operation.charAt(operation.length-1)!='n' &&
	operation.charAt(operation.length-1)!='p' &&
	operation.charAt(operation.length-1)!='s' && modFlag)
		operation = (operation == "0") ? "8" : operation + "8";
	document.getElementById("myRes").innerHTML = operation;
}

function press9() {
	if(operation.charAt(operation.length-1)!='n' &&
	operation.charAt(operation.length-1)!='p' &&
	operation.charAt(operation.length-1)!='s' && modFlag)
		operation = (operation == "0") ? "9" : operation + "9";
	document.getElementById("myRes").innerHTML = operation;
}

function press0() {
	if(operation.charAt(operation.length-1)!='n' &&
	operation.charAt(operation.length-1)!='p' &&
	operation.charAt(operation.length-1)!='s' && modFlag)
		operation = (operation == "0") ? "0" : operation + "0";
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
			if(operation.charAt(i)=='r' && i!=operation.length-1) dotFlag = false;
			if(operation.charAt(i)=='n' && i!=operation.length-1) dotFlag = false;
			if(operation.charAt(i)=='s' && i!=operation.length-1) dotFlag = false;
			if(operation.charAt(i)=='p' && i!=operation.length-1) dotFlag = false;
			if(operation.charAt(i)=='g' && i!=operation.length-1) dotFlag = false;
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
			if(operation.charAt(i)=='-' && i!=0) operFlag = true;
			if(operation.charAt(i)=='*') operFlag = true;
			if(operation.charAt(i)=='/') operFlag = true;
			if(operation.charAt(i)=='^') operFlag = true;
			if(operation.charAt(i)=='r') operFlag = true;
			if(operation.charAt(i)=='n') operFlag = true;
			if(operation.charAt(i)=='s') operFlag = true;
			if(operation.charAt(i)=='p') operFlag = true;
			if(operation.charAt(i)=='g') operFlag = true;
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
			if(operation.charAt(i)=='-' && i!=0) operFlag = true;
			if(operation.charAt(i)=='*') operFlag = true;
			if(operation.charAt(i)=='/') operFlag = true;
			if(operation.charAt(i)=='^') operFlag = true;
			if(operation.charAt(i)=='r') operFlag = true;
			if(operation.charAt(i)=='n') operFlag = true;
			if(operation.charAt(i)=='s') operFlag = true;
			if(operation.charAt(i)=='p') operFlag = true;
			if(operation.charAt(i)=='g') operFlag = true;
			if(operation.charAt(i)=='.' && i==operation.length-1) operFlag = true;
		}
		if(!operFlag) {
			operation = operation + "-";
			subsCnt += 1;
		}
	}
	document.getElementById("myRes").innerHTML = operation;
}

function pressTimes() {
	let operFlag = false;
	if(modFlag) {
		for (let i=0 ; i<operation.length ; i+=1) {
			if(operation.charAt(i)=='+') operFlag = true;
			if(operation.charAt(i)=='-' && i!=0) operFlag = true;
			if(operation.charAt(i)=='*') operFlag = true;
			if(operation.charAt(i)=='/') operFlag = true;
			if(operation.charAt(i)=='^') operFlag = true;
			if(operation.charAt(i)=='r') operFlag = true;
			if(operation.charAt(i)=='n') operFlag = true;
			if(operation.charAt(i)=='s') operFlag = true;
			if(operation.charAt(i)=='p') operFlag = true;
			if(operation.charAt(i)=='g') operFlag = true;
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
			if(operation.charAt(i)=='-' && i!=0) operFlag = true;
			if(operation.charAt(i)=='*') operFlag = true;
			if(operation.charAt(i)=='/') operFlag = true;
			if(operation.charAt(i)=='^') operFlag = true;
			if(operation.charAt(i)=='r') operFlag = true;
			if(operation.charAt(i)=='n') operFlag = true;
			if(operation.charAt(i)=='s') operFlag = true;
			if(operation.charAt(i)=='p') operFlag = true;
			if(operation.charAt(i)=='g') operFlag = true;
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
			if(operation.charAt(i)=='-' && i!=0) operFlag = true;
			if(operation.charAt(i)=='*') operFlag = true;
			if(operation.charAt(i)=='/') operFlag = true;
			if(operation.charAt(i)=='^') operFlag = true;
			if(operation.charAt(i)=='r') operFlag = true;
			if(operation.charAt(i)=='n') operFlag = true;
			if(operation.charAt(i)=='s') operFlag = true;
			if(operation.charAt(i)=='p') operFlag = true;
			if(operation.charAt(i)=='g') operFlag = true;
			if(operation.charAt(i)=='.' && i==operation.length-1) operFlag = true;
		}
		if(!operFlag) operation = operation + "r";
	}
	document.getElementById("myRes").innerHTML = operation;
}

function pressPow() {
	let operFlag = false;
	if(modFlag) {
		for (let i=0 ; i<operation.length ; i+=1) {
			if(operation.charAt(i)=='+') operFlag = true;
			if(operation.charAt(i)=='-' && i!=0) operFlag = true;
			if(operation.charAt(i)=='*') operFlag = true;
			if(operation.charAt(i)=='/') operFlag = true;
			if(operation.charAt(i)=='^') operFlag = true;
			if(operation.charAt(i)=='r') operFlag = true;
			if(operation.charAt(i)=='n') operFlag = true;
			if(operation.charAt(i)=='s') operFlag = true;
			if(operation.charAt(i)=='p') operFlag = true;
			if(operation.charAt(i)=='g') operFlag = true;
			if(operation.charAt(i)=='.' && i==operation.length-1) operFlag = true;
		}
		if(!operFlag) operation = operation + "^";
	}
	document.getElementById("myRes").innerHTML = operation;
}

function pressLog() {
	let operFlag = false;
	if(modFlag) {
		for (let i=0 ; i<operation.length ; i+=1) {
			if(operation.charAt(i)=='+') operFlag = true;
			if(operation.charAt(i)=='-' && i!=0) operFlag = true;
			if(operation.charAt(i)=='*') operFlag = true;
			if(operation.charAt(i)=='/') operFlag = true;
			if(operation.charAt(i)=='^') operFlag = true;
			if(operation.charAt(i)=='r') operFlag = true;
			if(operation.charAt(i)=='n') operFlag = true;
			if(operation.charAt(i)=='s') operFlag = true;
			if(operation.charAt(i)=='p') operFlag = true;
			if(operation.charAt(i)=='g') operFlag = true;
			if(operation.charAt(i)=='.' && i==operation.length-1) operFlag = true;
		}
		if(!operFlag) operation = operation + "log";
	}
	document.getElementById("myRes").innerHTML = operation;
}

function pressLn() {
	let operFlag = false;
	if(modFlag) {
		for (let i=0 ; i<operation.length ; i+=1) {
			if(operation.charAt(i)=='+') operFlag = true;
			if(operation.charAt(i)=='-' && i!=0) operFlag = true;
			if(operation.charAt(i)=='*') operFlag = true;
			if(operation.charAt(i)=='/') operFlag = true;
			if(operation.charAt(i)=='^') operFlag = true;
			if(operation.charAt(i)=='r') operFlag = true;
			if(operation.charAt(i)=='n') operFlag = true;
			if(operation.charAt(i)=='s') operFlag = true;
			if(operation.charAt(i)=='p') operFlag = true;
			if(operation.charAt(i)=='g') operFlag = true;
			if(operation.charAt(i)=='.' && i==operation.length-1) operFlag = true;
		}
		if(!operFlag) operation = operation + "ln";
	}
	document.getElementById("myRes").innerHTML = operation;
}

function pressExp() {
	let operFlag = false;
	if(modFlag) {
		for (let i=0 ; i<operation.length ; i+=1) {
			if(operation.charAt(i)=='+') operFlag = true;
			if(operation.charAt(i)=='-' && i!=0) operFlag = true;
			if(operation.charAt(i)=='*') operFlag = true;
			if(operation.charAt(i)=='/') operFlag = true;
			if(operation.charAt(i)=='^') operFlag = true;
			if(operation.charAt(i)=='r') operFlag = true;
			if(operation.charAt(i)=='n') operFlag = true;
			if(operation.charAt(i)=='s') operFlag = true;
			if(operation.charAt(i)=='p') operFlag = true;
			if(operation.charAt(i)=='g') operFlag = true;
			if(operation.charAt(i)=='.' && i==operation.length-1) operFlag = true;
		}
		if(!operFlag) operation = operation + "exp";
	}
	document.getElementById("myRes").innerHTML = operation;
}

function pressTan() {
	let operFlag = false;
	if(modFlag) {
		for (let i=0 ; i<operation.length ; i+=1) {
			if(operation.charAt(i)=='+') operFlag = true;
			if(operation.charAt(i)=='-' && i!=0) operFlag = true;
			if(operation.charAt(i)=='*') operFlag = true;
			if(operation.charAt(i)=='/') operFlag = true;
			if(operation.charAt(i)=='^') operFlag = true;
			if(operation.charAt(i)=='r') operFlag = true;
			if(operation.charAt(i)=='n') operFlag = true;
			if(operation.charAt(i)=='s') operFlag = true;
			if(operation.charAt(i)=='p') operFlag = true;
			if(operation.charAt(i)=='g') operFlag = true;
			if(operation.charAt(i)=='.' && i==operation.length-1) operFlag = true;
		}
		if(!operFlag) operation = operation + "tan";
	}
	document.getElementById("myRes").innerHTML = operation;
}

function pressCos() {
	let operFlag = false;
	if(modFlag) {
		for (let i=0 ; i<operation.length ; i+=1) {
			if(operation.charAt(i)=='+') operFlag = true;
			if(operation.charAt(i)=='-' && i!=0) operFlag = true;
			if(operation.charAt(i)=='*') operFlag = true;
			if(operation.charAt(i)=='/') operFlag = true;
			if(operation.charAt(i)=='^') operFlag = true;
			if(operation.charAt(i)=='r') operFlag = true;
			if(operation.charAt(i)=='n') operFlag = true;
			if(operation.charAt(i)=='s') operFlag = true;
			if(operation.charAt(i)=='p') operFlag = true;
			if(operation.charAt(i)=='g') operFlag = true;
			if(operation.charAt(i)=='.' && i==operation.length-1) operFlag = true;
		}
		if(!operFlag) operation = operation + "cos";
	}
	document.getElementById("myRes").innerHTML = operation;
}

function pressSin() {
	let operFlag = false;
	if(modFlag) {
		for (let i=0 ; i<operation.length ; i+=1) {
			if(operation.charAt(i)=='+') operFlag = true;
			if(operation.charAt(i)=='-' && i!=0) operFlag = true;
			if(operation.charAt(i)=='*') operFlag = true;
			if(operation.charAt(i)=='/') operFlag = true;
			if(operation.charAt(i)=='^') operFlag = true;
			if(operation.charAt(i)=='r') operFlag = true;
			if(operation.charAt(i)=='n') operFlag = true;
			if(operation.charAt(i)=='s') operFlag = true;
			if(operation.charAt(i)=='p') operFlag = true;
			if(operation.charAt(i)=='g') operFlag = true;
			if(operation.charAt(i)=='.' && i==operation.length-1) operFlag = true;
		}
		if(!operFlag) operation = operation + "sin";
	}
	document.getElementById("myRes").innerHTML = operation;
}

function pressAtan() {
	let operFlag = false;
	if(modFlag) {
		for (let i=0 ; i<operation.length ; i+=1) {
			if(operation.charAt(i)=='+') operFlag = true;
			if(operation.charAt(i)=='-' && i!=0) operFlag = true;
			if(operation.charAt(i)=='*') operFlag = true;
			if(operation.charAt(i)=='/') operFlag = true;
			if(operation.charAt(i)=='^') operFlag = true;
			if(operation.charAt(i)=='r') operFlag = true;
			if(operation.charAt(i)=='n') operFlag = true;
			if(operation.charAt(i)=='s') operFlag = true;
			if(operation.charAt(i)=='p') operFlag = true;
			if(operation.charAt(i)=='g') operFlag = true;
			if(operation.charAt(i)=='.' && i==operation.length-1) operFlag = true;
		}
		if(!operFlag) operation = operation + "atan";
	}
	document.getElementById("myRes").innerHTML = operation;
}

function pressAcos() {
	let operFlag = false;
	if(modFlag) {
		for (let i=0 ; i<operation.length ; i+=1) {
			if(operation.charAt(i)=='+') operFlag = true;
			if(operation.charAt(i)=='-' && i!=0) operFlag = true;
			if(operation.charAt(i)=='*') operFlag = true;
			if(operation.charAt(i)=='/') operFlag = true;
			if(operation.charAt(i)=='^') operFlag = true;
			if(operation.charAt(i)=='r') operFlag = true;
			if(operation.charAt(i)=='n') operFlag = true;
			if(operation.charAt(i)=='s') operFlag = true;
			if(operation.charAt(i)=='p') operFlag = true;
			if(operation.charAt(i)=='g') operFlag = true;
			if(operation.charAt(i)=='.' && i==operation.length-1) operFlag = true;
		}
		if(!operFlag) operation = operation + "acos";
	}
	document.getElementById("myRes").innerHTML = operation;
}

function pressAsin() {
	let operFlag = false;
	if(modFlag) {
		for (let i=0 ; i<operation.length ; i+=1) {
			if(operation.charAt(i)=='+') operFlag = true;
			if(operation.charAt(i)=='-' && i!=0) operFlag = true;
			if(operation.charAt(i)=='*') operFlag = true;
			if(operation.charAt(i)=='/') operFlag = true;
			if(operation.charAt(i)=='^') operFlag = true;
			if(operation.charAt(i)=='r') operFlag = true;
			if(operation.charAt(i)=='n') operFlag = true;
			if(operation.charAt(i)=='s') operFlag = true;
			if(operation.charAt(i)=='p') operFlag = true;
			if(operation.charAt(i)=='g') operFlag = true;
			if(operation.charAt(i)=='.' && i==operation.length-1) operFlag = true;
		}
		if(!operFlag) operation = operation + "asin";
	}
	document.getElementById("myRes").innerHTML = operation;
}

//Actions
function pressEqual() {
	let operand="";
	let exps;
	let result, restr;
	let filter=0, deciFlag=false;
	let firSign=false, secSign=false;

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
	operation.charAt(operation.length-1)=='r' ||
	operation.charAt(operation.length-1)=='p' ||
	operation.charAt(operation.length-1)=='n' ||
	operation.charAt(operation.length-1)=='s' ||
	operation.charAt(operation.length-1)=='g') {

		//Find operand based on math hierarchies
		if(operation.indexOf('a')!=-1 &&
		operation.indexOf('t')!=-1 &&
		operation.indexOf('a')!=-1 &&
		operation.indexOf('n')!=-1)
			operand = "arctan";
		else if(operation.indexOf('a')!=-1 &&
		operation.indexOf('s')!=-1 &&
		operation.indexOf('i')!=-1 &&
		operation.indexOf('n')!=-1)
			operand = "arcsin";
		else if(operation.indexOf('a')!=-1 &&
		operation.indexOf('c')!=-1 &&
		operation.indexOf('o')!=-1 &&
		operation.indexOf('s')!=-1)
			operand = "arccos";
		else if(operation.indexOf('t')!=-1 &&
		operation.indexOf('a')!=-1 &&
		operation.indexOf('n')!=-1)
			operand = "tan";
		else if(operation.indexOf('s')!=-1 &&
		operation.indexOf('i')!=-1 &&
		operation.indexOf('n')!=-1)
			operand = "sin";
		else if(operation.indexOf('c')!=-1 &&
		operation.indexOf('o')!=-1 &&
		operation.indexOf('s')!=-1)
			operand = "cos";
		else if(operation.indexOf('l')!=-1 &&
		operation.indexOf('o')!=-1 &&
		operation.indexOf('g')!=-1)
			operand = "log";
		else if(operation.indexOf('l')!=-1 &&
		operation.indexOf('n')!=-1)
			operand = "ln";
		else if(operation.indexOf('e')!=-1 &&
		operation.indexOf('x')!=-1 &&
		operation.indexOf('p')!=-1)
			operand = "exp";
		if(operation.indexOf('^')!=-1)
			operand = '^';
		else if(operation.indexOf('r')!=-1)
			operand = 'r';
		else if(operation.indexOf('*')!=-1)
			operand = '*';
		else if(operation.indexOf('/')!=-1)
			operand = '/';
		else if(operation.indexOf('+')!=-1)
			operand = '+';
		else if(operation.indexOf('-')!=-1)
			operand = '-';

		console.log("operation performed: " + operand);
		
		//Special operations for substractions
		if(operand=='-'){
			if(subsCnt>1) {
				if(operation.charAt(0)=='-') {
					firSign = true;
					operation = operation.substring(1);
				}
				for (let i=0 ; i<operation.length ; i+=1) {
					if(operation.charAt(i)=='-' && operation.charAt(i+1)=='-') {
						secSign = true;
						operation = operation.substring(0,i) + operation.substring(i+1);
						break;
					}
				}
			}
			exps = operation.split('-');
		}
		else {
			//Get both expressions of operation if there is an operand
			if(operand != "") exps = operation.split(operand);
		}

		//Perform operation
		switch(operand) {
			case '+':
				result = Number(exps[0]) + Number(exps[1]);
				break;
			case '-':
				if(firSign) exps[0] = "-" + exps[0];
				if(secSign) exps[1] = "-" + exps[1];
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
				if(exps[1]=="")	
					result = Math.sqrt(Number(exps[0]));
				else
					result = Math.pow(Number(exps[0]),1/Number(exps[1]));
				break;
			case "atan":
				if(document.getElementById('radians').checked)
					result = Math.atan(Number(exps[0]));
				else
					result = Math.atan(Number(exps[0]))*180/Math.PI;
				break;
			case "asin":
				if(document.getElementById('radians').checked)
					result = Math.asin(Number(exps[0]));
				else
					result = Math.asin(Number(exps[0]))*180/Math.PI;
				break;
			case "acos":
				if(document.getElementById('radians').checked)
					result = Math.acos(Number(exps[0]));
				else
					result = Math.acos(Number(exps[0]))*180/Math.PI;
				break;
			case "tan":
				if(document.getElementById('radians').checked)
					result = Math.tan(Number(exps[0]));
				else
					result = Math.tan(Number(exps[0])*Math.PI/180);
				break;
			case "sin":
				if(document.getElementById('radians').checked)
					result = Math.sin(Number(exps[0]));
				else
					result = Math.sin(Number(exps[0])*Math.PI/180);
				break;
			case "cos":
				if(document.getElementById('radians').checked)
					result = Math.cos(Number(exps[0]));
				else
					result = Math.cos(Number(exps[0])*Math.PI/180);
				break;
			case "ln":
				result = Math.log(Number(exps[0]));
				break;
			case "log":
				if(exps[1]=="")
					result = Math.log10(Number(exps[0]));
				else
					result = Math.log10(Number(exps[0])) / Math.log10(Number(exps[1]));
				break;
			case "exp":
				result = Math.exp(Number(exps[0]));
				break;
			default:
				break;
		}
		
		console.log(result);
		//Print final result
		if(isNaN(result)) {
			operation = "Error";
			modFlag = false;
		}
		else if(result == "Infinity"){
			modFlag = false;
		}
		else {
			//Filter for number of decimals
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
			if(filter>8) filter = 8; //Calculator gives 8 decimals as maximum
			operation = "" + result.toFixed(filter);
		}
	}
	document.getElementById("myRes").innerHTML = operation;
}

function pressClear() {
	//Reset calculator
	operation = "0";
	modFlag = true;
	document.getElementById("myRes").innerHTML = operation;
}

function pressDelete() {
	let osize = operation.length;
	//Delete one number
	if(operation.charAt(osize-1)>='0' && operation.charAt(osize-1)<='9') 
		operation = operation.substring(0,osize-1);
	//Delete sign
	else if(operation.charAt(osize-1)=='-') {
		operation = operation.substring(0,osize-1);
		subsCnt -= 1;
	}
	//Delete one operand
	else {
		for (let i=osize-1 ; i>=0 ; i-=1){
			if(operation.charAt(osize-1)>='0' && operation.charAt(osize-1)<='9')
				break;
			operation = operation.substring(0,osize-1);
			osize = operation.length;
		}
	}
	if(operation=="") operation = "0";
	document.getElementById("myRes").innerHTML = operation
}

function toggleSign() {
	let firFrag, secFrag;
	let firstArg = true;
	//Determine if first or second argument is being written
	for (let i=0 ; i<operation.length ; i+=1) {
		if(operation.charAt(i) == '+' ||
		operation.charAt(i) == '*' ||
		operation.charAt(i) == '/' ||
		operation.charAt(i) == '^' ||
		(operation.charAt(i) == '-' && i!=0))
			firstArg = false;
	}
	//toggle sign for first argument
	if(firstArg){
		//Remove sign
		if(operation.charAt(0) == '-') {
			operation = operation.substring(1);
			subsCnt -= 1;
		}
		//Add sign
		else {
			operation = "-" + operation;
			subsCnt += 1;
		}
	}
	//toggle sign for second argument
	else {
		for (let i=operation.length-1 ; i>=0 ; i-=1) {
			//Remove sign
			if(operation.charAt(i) == '-') {
				if(operation.charAt(i-1) == '-' ||
				operation.charAt(i-1) == '*' ||
				operation.charAt(i-1) == '/' ||
				operation.charAt(i-1) == '+') {
					firFrag = operation.substring(0,i);
					secFrag = operation.substring(i+1);
					operation = firFrag + secFrag;
					subsCnt -= 1;
					break;
				}
			}
			//Add sign
			if(operation.charAt(i) == '+' ||
			operation.charAt(i) == '*' ||
			operation.charAt(i) == '/' ||
			(operation.charAt(i) == '-' && operation.charAt(i-1) != '-')) {
				firFrag = operation.substring(0,i+1);
				secFrag = operation.substring(i+1);
				operation = firFrag + "-" + secFrag;
				subsCnt += 1;
				break;
			}
		}
	}
	document.getElementById("myRes").innerHTML = operation;
}

function factorial(n) {
	var total = 1; 
	for (let i=1 ; i<=n ; i+=1) {
		total *= i; 
	}
	return total; 
}
