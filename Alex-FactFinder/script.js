document.querySelector('#menu').a.addEventListener("click", showfact1);
document.querySelector('#menu').b.addEventListener("click", showfact2);
document.querySelector('#menu').c.addEventListener("click", showfact3);
document.querySelector('#menu').d.addEventListener("click", showfact4);
document.querySelector('#menu').e.addEventListener("click", showfact5);
document.querySelector('#menu').f.addEventListener("click", showfact6);
document.querySelector('#menu').g.addEventListener("click", showfact7);
document.querySelector('#themes').theme1.addEventListener("click", changetheme1);
document.querySelector('#themes').theme2.addEventListener("click", changetheme2);
document.querySelector('#themes').theme3.addEventListener("click", changetheme3);

function showfact1() {
	document.querySelector('#facts').innerHTML = "Did you know that crabs that have lost their legs can regenerate them over time? <br><br> <img src = 'images/crab.jpg'>";
	document.querySelector('img').style.height = "250px";
}

function showfact2() {
	document.querySelector('#facts').innerHTML = "Did you know that there is a phobia of bridges? It's called gephyrophobia. <br><br> <img src = 'images/bridge.jpg'>";
	document.querySelector('img').style.height = "250px";
}

function showfact3() {
	document.querySelector('#facts').innerHTML = "Did you know that a shrimp's heart is located in its head? <br><br> <img src = 'images/shrimp.jpg'>";
	document.querySelector('img').style.height = "250px";
}

function showfact4() {
	document.querySelector('#facts').innerHTML = "Did you know that the Spanish national anthem has no words? <br><br> <img src = 'images/spain.jpg'>";
	document.querySelector('img').style.height = "250px";
}

function showfact5() {
	document.querySelector('#facts').innerHTML = "Did you know that the letter 'Q' is the only letter in the alphabet that doesn't appear in any American state name? <br><br> <img src = 'images/letter.png'>";
	document.querySelector('img').style.height = "230px";
}

function showfact6() {
	document.querySelector('#facts').innerHTML = "Did you know that there is a fruit called black sapote that tastes like chocolate pudding? <br><br> <img src = 'images/fruit.jpg'>";
	document.querySelector('img').style.height = "250px";
}

function showfact7() {
	document.querySelector('#facts').innerHTML = "Did you know that ketchup used to be sold as medicine to cure inigestion. <br><br> <img src = 'images/ketchup.jpg'>";
	document.querySelector('img').style.height = "250px";
}

function changetheme1(){
	var inputs = document.getElementsByTagName('input');
	
	document.querySelector('body').style.backgroundColor = "#3E8E7E";
	document.querySelector('body').style.backgroundImage = "initial";
	document.querySelector('section').style.backgroundColor = "#7CD1B8";
	document.querySelector('section').style.color = "#FAEDC6";
	document.querySelector('section').style.fontFamily = "Arial";
	document.querySelector('section').style.borderRadius = "15px";
	document.querySelector('section').style.border = "4px solid #000000";
	
	for (var i = 0; i < inputs.length; i++) {
		
		inputs[i].style.color = "#FAEDC6";
		inputs[i].style.backgroundColor = "#FABB51";
		inputs[i].style.fontFamily = "Arial";
		inputs[i].style.fontSize = "15px";
		inputs[i].style.fontWeight = "bold";
		inputs[i].style.borderWidth = "3px";
		inputs[i].style.borderRadius = "10px";
		inputs[i].style.borderColor = "#000000";
	}
	
	inputs[0].onmouseover = function() {mouseOverTheme1(0)};
	inputs[1].onmouseover = function() {mouseOverTheme1(1)};
	inputs[2].onmouseover = function() {mouseOverTheme1(2)};
	inputs[3].onmouseover = function() {mouseOverTheme1(3)};
	inputs[4].onmouseover = function() {mouseOverTheme1(4)};
	inputs[5].onmouseover = function() {mouseOverTheme1(5)};
	inputs[6].onmouseover = function() {mouseOverTheme1(6)};
	inputs[7].onmouseover = function() {mouseOverTheme1(7)};
	inputs[8].onmouseover = function() {mouseOverTheme1(8)};
	inputs[9].onmouseover = function() {mouseOverTheme1(9)};
	
	inputs[0].onmouseout = function() {mouseOutTheme1(0)};
	inputs[1].onmouseout = function() {mouseOutTheme1(1)};
	inputs[2].onmouseout = function() {mouseOutTheme1(2)};
	inputs[3].onmouseout = function() {mouseOutTheme1(3)};
	inputs[4].onmouseout = function() {mouseOutTheme1(4)};
	inputs[5].onmouseout = function() {mouseOutTheme1(5)};
	inputs[6].onmouseout = function() {mouseOutTheme1(6)};
	inputs[7].onmouseout = function() {mouseOutTheme1(7)};
	inputs[8].onmouseout = function() {mouseOutTheme1(8)};
	inputs[9].onmouseout = function() {mouseOutTheme1(9)};
}

function mouseOverTheme1(i) {
	var inputs = document.getElementsByTagName('input');
	
	inputs[i].style.color = "#325288";
	inputs[i].style.backgroundColor = "#FAEEE7";
}

function mouseOutTheme1(i) {
	var inputs = document.getElementsByTagName('input');
	
	inputs[i].style.color = "#FAEDC6";
	inputs[i].style.backgroundColor = "#FABB51";
}

function changetheme2(){
	var inputs = document.getElementsByTagName('input');
	
	document.querySelector('body').style.backgroundColor = "#FFFFFF";
	document.querySelector('body').style.backgroundImage = "initial";
	document.querySelector('section').style.backgroundColor = "#FFFFFF";
	document.querySelector('section').style.color = "#000000";
	document.querySelector('section').style.fontFamily = "Times New Roman";
	document.querySelector('section').style.borderRadius = "0px";
	document.querySelector('section').style.border = "5px ridge #DCDCDC";
	document.querySelector('section').style.fontFamily = "Arial";
	
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].style.color = "#000000";
		inputs[i].style.backgroundColor = "	#D3D3D3";
		inputs[i].style.fontWeight = "normal";
		inputs[i].style.fontSize = "15px";
		inputs[i].style.borderWidth = "1px";
		inputs[i].style.borderRadius = "3px";
		inputs[i].style.borderColor = "#000000"
		inputs[i].style.fontFamily = "Arial";
	}
	
	inputs[0].onmouseover = function() {mouseOverTheme2(0)};
	inputs[1].onmouseover = function() {mouseOverTheme2(1)};
	inputs[2].onmouseover = function() {mouseOverTheme2(2)};
	inputs[3].onmouseover = function() {mouseOverTheme2(3)};
	inputs[4].onmouseover = function() {mouseOverTheme2(4)};
	inputs[5].onmouseover = function() {mouseOverTheme2(5)};
	inputs[6].onmouseover = function() {mouseOverTheme2(6)};
	inputs[7].onmouseover = function() {mouseOverTheme2(7)};
	inputs[8].onmouseover = function() {mouseOverTheme2(8)};
	inputs[9].onmouseover = function() {mouseOverTheme2(9)};
	
	inputs[0].onmouseout = function() {mouseOutTheme2(0)};
	inputs[1].onmouseout = function() {mouseOutTheme2(1)};
	inputs[2].onmouseout = function() {mouseOutTheme2(2)};
	inputs[3].onmouseout = function() {mouseOutTheme2(3)};
	inputs[4].onmouseout = function() {mouseOutTheme2(4)};
	inputs[5].onmouseout = function() {mouseOutTheme2(5)};
	inputs[6].onmouseout = function() {mouseOutTheme2(6)};
	inputs[7].onmouseout = function() {mouseOutTheme2(7)};
	inputs[8].onmouseout = function() {mouseOutTheme2(8)};
	inputs[9].onmouseout = function() {mouseOutTheme2(9)};
}

function mouseOverTheme2(i) {
	var inputs = document.getElementsByTagName('input');
	
	inputs[i].style.backgroundColor = "#B8B8B8";
}

function mouseOutTheme2(i) {
	var inputs = document.getElementsByTagName('input');
	
	inputs[i].style.backgroundColor = "#D3D3D3";
}

function changetheme3(){
	var inputs = document.getElementsByTagName('input');
	
	document.querySelector('body').style.backgroundImage = "url('images/background.jpg')";
	document.querySelector('body').style.backgroundRepeat = "no-repeat";
	document.querySelector('body').style.backgroundSize = "cover";
	document.querySelector('section').style.color = "#00FFFF";
	document.querySelector('section').style.backgroundColor = "rgba(0,0,0,0.5)";
	document.querySelector('section').style.border = "4px solid #00FFFF";
	document.querySelector('section').style.borderRadius = "30px";
	document.querySelector('section').style.borderTopLeftRadius = "0px";
	document.querySelector('section').style.borderBottomRightRadius = "0px";
	document.querySelector('section').style.fontFamily = "'Share Tech Mono'";
	document.querySelector('main').style.animation = "theme3 2s linear 0s 1 normal";
	
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].style.color = "#00FFFF";
		inputs[i].style.backgroundColor = "rgba(0,0,0,0.5)";
		inputs[i].style.border = "4px solid #00FFFF";
		inputs[i].style.borderRadius = "15px";
		inputs[i].style.borderTopLeftRadius = "0px";
		inputs[i].style.borderBottomRightRadius = "0px";
		inputs[i].style.fontWeight = "normal";
		inputs[i].style.fontSize = "15px";
		inputs[i].style.fontFamily = "'Share Tech Mono'";
	}
	
	inputs[0].onmouseover = function() {mouseOverTheme3(0)};
	inputs[1].onmouseover = function() {mouseOverTheme3(1)};
	inputs[2].onmouseover = function() {mouseOverTheme3(2)};
	inputs[3].onmouseover = function() {mouseOverTheme3(3)};
	inputs[4].onmouseover = function() {mouseOverTheme3(4)};
	inputs[5].onmouseover = function() {mouseOverTheme3(5)};
	inputs[6].onmouseover = function() {mouseOverTheme3(6)};
	inputs[7].onmouseover = function() {mouseOverTheme3(7)};
	inputs[8].onmouseover = function() {mouseOverTheme3(8)};
	inputs[9].onmouseover = function() {mouseOverTheme3(9)};
	
	inputs[0].onmouseout = function() {mouseOutTheme3(0)};
	inputs[1].onmouseout = function() {mouseOutTheme3(1)};
	inputs[2].onmouseout = function() {mouseOutTheme3(2)};
	inputs[3].onmouseout = function() {mouseOutTheme3(3)};
	inputs[4].onmouseout = function() {mouseOutTheme3(4)};
	inputs[5].onmouseout = function() {mouseOutTheme3(5)};
	inputs[6].onmouseout = function() {mouseOutTheme3(6)};
	inputs[7].onmouseout = function() {mouseOutTheme3(7)};
	inputs[8].onmouseout = function() {mouseOutTheme3(8)};
	inputs[9].onmouseout = function() {mouseOutTheme3(9)};
}

function mouseOverTheme3(i) {
	var inputs = document.getElementsByTagName('input');
	
	inputs[i].style.animation = "hoverTheme3 0.5s linear 0s 1 normal";
	inputs[i].style.fontSize = "30px";
}

function mouseOutTheme3(i) {
	var inputs = document.getElementsByTagName('input');
	
	inputs[i].style.animation = "hoverTheme3 0.5s linear 0s 1 reverse";
	inputs[i].style.fontSize = "15px";
}