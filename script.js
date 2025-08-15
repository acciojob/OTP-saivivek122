//your JS code here. If required.
let inputs=document.querySelectorAll(".code");
inputs[0].focus();
for(let i=0;i<inputs.length;i++){
	inputs[i].addEventListener("input",()=>{
		if(inputs[i].value!=""){
			inputs[i+1].focus();
		}
	});
	inputs[i].addEventListener("keydown",(e)=>{
		if(e.key==="Backspace"){
			inputs[i].value="";
			inputs[i-1].focus()
			
			
		}
	})
}
