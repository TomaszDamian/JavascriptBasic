1.A
```javascript
//getting div
document.body.firstElementChild;
//getting ul
document.body.children[1];
//getting li
document.body.lastElementChild.lastElementChild;
```

2.A
```javascript
"use strict"
//1.
//getting button and then adding a onclick listener
document.getElementById('hider').onclick = ()=>{
    //getting the div I want to hide and hiding it
    document.getElementById('textDiv').hidden = true;
};

//2.
//<input type="button" onclick="this.hidden=true" value="Click to hide">

//3.
//only one and two will run since the event is removed in the second line
```
3.
