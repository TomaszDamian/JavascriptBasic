"use strict";

function something(){
	window.console.log("hello");
}

var anotherThing = function(){
	window.console.log("hello again");
};

var thirdThing = function thirdThing(first, ...rest){
	window.console.log(first, rest);
};

something();
anotherThing();
thirdThing("one", 2, 3, 4, 5, 6);