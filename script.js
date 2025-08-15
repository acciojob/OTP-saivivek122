//your JS code here. If required.
let inputs=document.querySelectorAll(".code");
inputs[0].focus();
for(let i=0;i<inputs.length;i++){
	inputs[i].addEventListener("input",()=>{
		if(inputs[i].value!="" && i<inputs.length-1 ){
			inputs[i+1].focus();
		}
	});
	inputs[i].addEventListener("keydown",(e)=>{
		if(e.key==="Backspace" && i>0){
			inputs[i].value="";
			inputs[i-1].focus()
			
			
		}
	})
}
