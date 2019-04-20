window.onload = function() {

};

var currentMode = document.querySelector(".selected");
var modeButtons = document.querySelectorAll(".button");
var heartButton = document.querySelector(".button2");
var mode1 = document.querySelector(".mode1");
var mode2 = document.querySelector(".mode2");
var ad = document.querySelector(".angledown");
var au = document.querySelector(".angleup");


for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		if(currentMode !== this) {
			this.classList.add("selected");
			currentMode.classList.remove("selected");
			currentMode = this;
		}

		reset();
	});
}

ad.addEventListener("click", function() {
	if(ad.classList.contains("display")) {
		 ad.classList.remove("display");
		 ad.classList.add("hidding");
		 au.classList.add("display");
		 au.classList.remove("hidding");
  	}
  }
)

au.addEventListener("click", function() {
	if(au.classList.contains("display")) {
		 au.classList.remove("display");
		 au.classList.add("hidding");
		 ad.classList.add("display");
		 ad.classList.remove("hidding");
  	}
  }
)

// var space= ''\n';
function reset() {
    if(heartButton.classList.contains("selected")) {

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
