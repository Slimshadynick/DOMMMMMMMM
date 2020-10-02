window.addEventListener("DOMContentLoaded",function(){
    let btn=document.createElement("button");
    let btnText=document.createTextNode("Add square");
    btn.appendChild(btnText);
    document.body.appendChild(btn);
    btn.addEventListener("click",addDiv);
})

var squareCount=0;

function addDiv(){
    let div=document.createElement("div");
    div.className+="square";
    div.id="id"+squareCount;
    squareCount++;
    document.body.appendChild(div);
    div.addEventListener("mouseenter",displayId);
    div.addEventListener("mouseout",removeId);
    div.addEventListener("click",changeColor);
    div.addEventListener("dblclick",oddEven);
}

var colors=["brown","red","green","yellow","blue","pink","orange","violet"];

function displayId(){
    let div=event.target;
    let p=document.createElement("p");
    let t=div.id+"";
    t=t.substr(2);
    let text=document.createTextNode(t);
    p.appendChild(text);
    p.className+="info";
    div.appendChild(p);
}

function removeId(){
    let div=event.target;
    let id="#"+div.id;
    let p=document.querySelector(id+" > p");
    p.remove();
}

function changeColor(){
    let ind=Math.floor(Math.random()*8);
    let div=event.target;
    div.style.backgroundColor=colors[ind];
    console.log(colors[ind]);
}

function oddEven(){
    let div=event.target;
    let id=div.id;
    id=id.substr(2);
    if(id%2==0){
        let new_id="id"+(parseInt(id)+1);
        let del_div=document.querySelector("#"+new_id);
        if(del_div!=null){
            del_div.remove();
        }
        else{
            alert("Next div does not exist");
        }
    }
    else{
        let new_id="id"+(parseInt(id)-1);
        let del_div=document.querySelector("#"+new_id);
        if(del_div!=null){
            del_div.remove();
        }
        else{
            alert("Previous div does not exist");
        }
    }
}

