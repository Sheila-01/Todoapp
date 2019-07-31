// Create a new list item when clicking on the "Add" button
const createTodo = () => {
  const myli = document.createElement("li");                        //creating a list for the items
  let inputValue = document.querySelector("#myInput").value;    //variable to select input id from html
  const myUL = document.querySelector("#myUL");                //variable to select input id from html
  const myText = document.createTextNode(inputValue);             //capture the text and change it to html
  // console.log(myText);
  myli.appendChild(myText);                                         //Add text to list
  if (inputValue === '') {                                        // Condition if nothing is entered   
    alert("You must write something!");
  } else {
    myUL.appendChild(myli);    
    }
  // inputValue = "";                                                  //sets the input value back to an empty string
    // document.getElementById("myUL").appendChild(li);
  
  document.querySelector("#myInput").value = "";

  const myspan = document.createElement("BUTTON");                    //creates a new button element
  const myxbtn = document.createTextNode("\u00D7");                  //Creates the x button that appears after the word
  myspan.className = "close";
  myspan.appendChild(myxbtn);                                          //Appends the x to the span
  myli.appendChild(myspan);      

  const closeBtnArray = document.querySelectorAll('.close')
  console.log(closeBtnArray)
  // console.log(closeBtnArray[0])

  for (let index = 0; index < closeBtnArray.length; index++){
    console.log(closeBtnArray[index])
      function removeTodo () {
        this.parentElement.style.display = 'none';
        //closeBtnArray[index].
        console.log(this.parentElement)
      }
      closeBtnArray[index].onclick = removeTodo

  }
}















//Appends the span to the list

  // for ( let i = 0; i < close.length; i++) {
  //   close[i].onclick = function() {
  //     const mytodo = this.parentElement;
  //     mytodo.style.display = "none";  
  //     console.log(mytodo)                                         
  //   }
  // }

// // Create a "close" button and append it to each list item
// const myList = document.querySelector("LI");
// // const i;
// // for (let i = 0; i < myList.length; i++) {
// //   const span = document.createElement("SPAN");
// //   const btn = document.createTextNode("\u00D7");
// //   span.className = "close";
// //   span.appendChild(btn);
// //   myList[i].appendChild(span);
// // }


// // Click on a close button to hide the current list item
// const close = document.getElementsByClassName("close");
// // const i;
// for (let i = 0; i < close.length; i++) {                              
//   close[i].onclick = function() {
//     const div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// // Add a "checked" symbol when clicking on a list item
// const list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);