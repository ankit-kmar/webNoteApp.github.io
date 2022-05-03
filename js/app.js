//if user add a notes it will be added to local storage

showNotes();
let addBtn = document.getElementById('add-btn');
addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById('add-txt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = " ";
    // console.log(notesObj);


    showNotes();
})




//function to show elements from localStorage

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = " ";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="card noteCard my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text"> ${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>`
    });

    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show right now. Use "Add Note" button to add the notes.`
    }
}


//function to delete note


function deleteNote(index) {
    // console.log(`I am deleting`, index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}





//search notes function

let search = document.getElementById('search-txt');
search.addEventListener("input", function () {


    let inputVal = search.value.toLowerCase();
    // console.log(`this is search time` , inputVal);

    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {



        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";


        }

    })

})

// copy text


const textCopy = () => {
    let text = document.getElementById('add-txt');
    text.select();
    navigator.clipboard.writeText(text.value);
    // // this code for unselect seleted text afterr copid
    //   document.getSelection().removeAllRanges();
    alert("Copied");
    // disabled=text.length===0
    
}



const clearText = () => {
    let text = document.getElementById('add-txt');
    text.value = "";

    // alert("Text Cleared");

}



/*
future feature

1. add title , search by title
2. mark notes as importent
3. separeye notes by users

*/


