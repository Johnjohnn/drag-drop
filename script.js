const fill = document.querySelectorAll(".fill")
const emties = document.querySelectorAll(".empty")

fill.addEventListener("dragstart", dragStart)
fill.addEventListener("dragend", dragEnd)

for(const empty of emties) {
    empty.addEventListener("addover", dragOver)
    empty.addEventListener("addover", dragEnter)
    empty.addEventListener("addover", dragLeave)
    empty.addEventListener("addover", dragDrop)
}

function dragStart() 
{ this.className += " hold"
setTimeout(() => this.className = "invisible",0)

}


function dragEnd() 
{ console.log("drag end")}


function dragOver() 
{ console.log("drag over")}


function dragEnter() 
{ console.log("drag enter")}


function dragLeave() 
{ console.log("drag leave")}


function dragDrop() 
{ console.log("drag drop")}

