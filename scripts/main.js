window.onload = function() {

};

var currentMode = document.querySelector(".selected");
var modeButtons = document.querySelectorAll(".button");
var heartButton = document.querySelector(".button2");
var mode1 = document.querySelector(".mode1");
var mode2 = document.querySelector(".mode2");
var ad = document.querySelector(".angledown");
var au = document.querySelector(".angleup");
var ads = document.querySelector(".angledown2");
var aus = document.querySelector(".angleup2");
var adt = document.querySelector(".angledown3");
var aut = document.querySelector(".angleup3");



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

ads.addEventListener("click", function() {
	if(ads.classList.contains("display")) {
		 ads.classList.remove("display");
		 ads.classList.add("hidding");
		 aus.classList.add("display");
		 aus.classList.remove("hidding");
  	}
  }
)

aus.addEventListener("click", function() {
	if(aus.classList.contains("display")) {
		 aus.classList.remove("display");
		 aus.classList.add("hidding");
		 ads.classList.add("display");
		 ads.classList.remove("hidding");
  	}
  }
)

adt.addEventListener("click", function() {
	if(adt.classList.contains("display")) {
		 adt.classList.remove("display");
		 adt.classList.add("hidding");
		 aut.classList.add("display");
		 aut.classList.remove("hidding");
  	}
  }
)

aut.addEventListener("click", function() {
	if(aut.classList.contains("display")) {
		 aut.classList.remove("display");
		 aut.classList.add("hidding");
		 adt.classList.add("display");
		 adt.classList.remove("hidding");
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
