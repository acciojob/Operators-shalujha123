//your JS code here. If required.
document.getElementById("calculate").addEventListener("click",() => {
	let num1 = parseFloat(document.getElementById("num1").value)
	let num2 = parseFloat(document.getElementById("num2").value)
	let operator = document.getElementById("operator").value
	let result

	if(isNaN(num1) || isNaN(num2)){
		result = "Please enter valid numbers!"
	}else{
		switch(operator){
			case "+":
				result = num1+num2
				break
			case "-":
				result = num1-num2
				break
			case "*":
				result = num1*num2
				break
			case "/":
				result = num2!==0 ? num1/num2 : "Can't divide by zero!"
				break
			default:
				result = "Invalid operator!"
		}
	}
	document.getElementById("result").textContent = "Result: "+result
})

document.getElementById("change_text").addEventListener("click",()=>{
	let newTxt = ["Bye","Good Bye","To","Your","Class"]
	let divisions = document.querySelectorAll(".division")
	divisions.forEach((div,index)=>{
		div.textContent = newTxt[index]
	})
})








