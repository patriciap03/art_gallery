import { postToDatabase } from "./index.js";

let modal = document.getElementById('post_modal');
let newPostButton = document.getElementById('new_post');
let span = document.getElementById('cancel');
let post = document.getElementById('add_post');

newPostButton.onclick = function() {
    modal.style.display = 'block';
  }
  
  span.onclick = function() {
    modal.style.display = 'none'
  }
  
  window.onclick = function(){
    if (event.target == modal){
      modal.style.display = 'none';
    }
  };