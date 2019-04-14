window.onload = function() {

};

var currentMode = document.querySelector(".selected");
var modeButtons = document.querySelectorAll(".button");
var heartButton = document.querySelector(".button2");
var mode1 = document.querySelector(".mode1");
var mode2 = document.querySelector(".mode2");


for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		if(currentMode !== this) {
			this.classList.add("selected");
			currentMode.classList.remove("selected");
			currentMode = this;

		}
		// information.classList.remove("hidding");
		// information.classList.add("display");
		reset();
	});
}

// var space= ''\n';
function reset() {
    if(heartButton.classList.contains("selected")) {
			// mode1.classList.remove("hidding");
			// mode1.classList.add("display");
			// console.log("1")
			// information.textContent="hi heart \n a"
			if(mode1.classList.contains("hidding")) {
				 mode1.classList.remove("hidding");
			}
			if(!mode1.classList.contains("display")) {
				mode1.classList.add("display");
			}
			if(!mode2.classList.contains("hidding")) {
				 mode2.classList.add("hidding");
			}
			if(mode2.classList.contains("display")) {
				mode2.classList.remove("display");
			}

    }else{
			// information.classList.remove("check");
			// console.log("2")
			// information.textContent="hi"
			// mode1.classList.add("hidding");
			// mode2.classList.remove("hidding");
			// mode2.classList.add("display");
			if(mode1.classList.contains("display")) {
				mode1.classList.remove("display");
			}
			if(!mode1.classList.contains("hidding")) {
				 mode1.classList.add("hidding");
			}
			if(mode2.classList.contains("hidding")) {
				 mode2.classList.remove("hidding");
			}
			if(!mode2.classList.contains("display")) {
				mode2.classList.add("display");
			}
		}
}
