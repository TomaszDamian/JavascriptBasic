first off, I was in a rush to make this code in the first place so the code.js is just a mess, I went with 2 different functions for the same thing which was definetly not the right choice and it ended up doing weird things at times

second off, this is just a demo but I also wanted to improve on a bunch of things like readability and other stuff like that

third off, I adjusted the code due to the css and the name of the image that I added in later on

### things that were improved:
#### number one : minimised function use
for sure one of the things I improved on was the whole fucky thing with the functions
for some reason I thought that each thing should have it's own filter function and so 
```javascript
function SearchNames(){...}

function MakeActiveButton(ActiveButton){...}

function ButtonFilter(){...}
```
came to life and it was just a total mess
what I did was cut all that shit and instead just make **ONE** filter function that takes in both the searchbar data and the toggle button data, it was a little weird to figure out at first since I wanted the button to toggle **BEFORE** the filter went on with it's own thing

and with that:
```javascript
function ToggleAndFilter(){
    let ActiveButton = document.querySelector(".is-danger")
    ActiveButton.classList.remove("is-danger");
    ActiveButton.classList.add("is-info");

    this.classList.add("is-danger");
    Filter();
}

function Filter(){/*filter code*/}
```
this came to life, at first it was a little weird to call a function within another function since it kinda goes against whatever I've been learning up until now but in this case it makes sense to do this

#### number two : improving html and containers
at this point in time the html is totally broken for code.js which is the early version, I decided it was better if the name of the image was listed under the image itself and to do that I needed something to hold them together so they wouldn't get lost
```javascript
for (let imageData of pictures){
    let ImageDiv = document.createElement("div");
    let ImageName = document.createElement("p");
    ImageName.textContent = imageData.name;

	let AllTagsForImage = "";
    let createdImage = new Image(300,150);
    createdImage.src = imageData.link;
    createdImage.alt = imageData.name;
    
    for (let tag of imageData.tags){
        tag = tag.toLowerCase();
        AllTagsForImage = AllTagsForImage + tag + " ";
		    createdImage.dataset.tags = AllTagsForImage
        AllTags.push(tag);
    }
    
    ImageDiv.style.padding = "5px";
    ImageDiv.classList.add("ImgContainer")
    ImageDiv.appendChild(createdImage);
    ImageDiv.appendChild(ImageName);
    document.getElementById("Picturediv").appendChild(ImageDiv);
}
```
As you can see I made a div first alngside a p tag which is supposed to hold the name of the image AND the image itself. then instead of appending one by one into the html I append the image and the p tag into the div container and THEN I append it all into the html, basically to keep myself away from doing too many dom functions at once since they're heavy and unwanted in this kind of code
most of it is the same like hooking the name to alt and tags to dataset.tags, if anyone knows any better way to do this send me a email or talk to me personally if you know me.

#### number three : the filter function itself
when I was making the earlier version of this code I was only focused on one thing at a time and kinda forgot about the other thing, I ended up realising I should have looked at the whole image instead of just the first part
so that's how the mess was created with the 2 different search functions that had basically the same code just written differently
now in this attempt I actually decided to go with a more simple approach to this situation.
```javascript
function Filter(){
    //getting searchbar value and puts it to lower case
    let SearchBarValue = document.querySelector("input").value;
    SearchBarValue = SearchBarValue.toLowerCase();
    
    //active tag value
    let TagValue = document.querySelector(".is-danger").textContent;

    //all img tags
    let ImgContainer = document.querySelectorAll(".ImgContainer");

    for(index = 0; index < ImgContainer.length; index++){
        //returns a array since it's getElement*s*ByTagName, can be more than one hence why the [0] is there
        let ImageName = ImgContainer[index].getElementsByTagName("img")[0].alt;
        ImageName = ImageName.toLowerCase();

        let ImageTags = ImgContainer[index].getElementsByTagName("img")[0].dataset.tags;

        if(TagValue === "show all" && SearchBarValue === ""){
            ImgContainer[index].hidden = false;
        }
        //check SearchBarValue if the TagValue is default
        else if(TagValue === "show all" && ImageName.includes(SearchBarValue)){
            ImgContainer[index].hidden = false;
        }
        //checks tag value if the SearchBarValue is default
        else if(ImageTags.includes(TagValue) && SearchBarValue === ""){
            ImgContainer[index].hidden = false;
        }
        //checks for TagValue and ImageName
        else if(ImageTags.includes(TagValue) && ImageName.includes(SearchBarValue)){
            ImgContainer[index].hidden = false;
        }
        //if all checks fail then you hide the image
        else{
            ImgContainer[index].hidden = true;
        }
    }
}
```
ok so, in the actual code there is this huge chunk of code that has a nested for loop in another for loop (that will prob be deleted right after I push the wiki), at the early stage of figuring out how to search through the images I was playing around with the ImgContainer variable
(pastebin link to the other for in for code: https://pastebin.com/3ZvpetNV)
```javascript
//was
let ImgContainer = document.querySelectorAll("#Picturediv");
//is
let ImgContainer = document.querySelectorAll(".ImgContainer");
```
this is pretty self explanitory, I was getting the container that contained the ImgContainer and at first I didn't really realise what I was doing but then later I realised that I should just get the ImgContainer itself, that gave me a slight boost in readability but since the ImgContainer variable isn't iterable with a `for (a of b)` I went with a old school way of for loops, and anyway the indexing of things will never dissapear so it's okay to play with it a little
back on track; The checks aren't that complicated to be fully honest, 4 checks in total as compared to like 8(? or more) that I had in the early stage, this just has a check for both value being default (that's 1) check for only one of the values being default (that's 2) and then check if both of the values aren't default (that's 1, total 4), if they all fail then you hide the container it's in hence why it's being indexed since I want to hide that specific container

