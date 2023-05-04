let button = document.getElementsByClassName('btn');
let player = document.getElementById('player');
let count = true;
let counter = 0;
let Reset = document.getElementById('Reset');
let Winner;
let Button = Array.from(button);
let A = ['', '', '', '', '', '', '', '', ''];
let Mode = document.getElementById('Mode');
let mode = document.getElementsByClassName('mode');
let WinningSong= new Audio('./song/Free Fire Booyah.mp3');

console.log(Button);
function disable(Winner) {
   if (Winner == 1) {
      for (let j = 0; j < A.length; j++) {
         if (A[j] == '') {
            button[j].disabled = true;
         }
      }
   }
}

function winner(Winner, name) {
   for (let i = 0; i < A.length; i++) {
      if (A[i] != '') {
         counter++;
         console.log(counter);
      }
      else {
         continue;
      }
   }
   if (Winner == 1) {
      player.innerText = `Player ${name} has Won!!!`
      WinningSong.play();
   }
   else if (counter == A.length) {
      player.innerText = 'Match Tie!!!'
   }
   counter = 0;
}

function checkWin(array) {
   console.log(array.length)
   for (let i = 0; i < array.length; i++) {
      if (A[i] == A[i + 1] && A[i + 1] == A[i + 2] && A[i] != '' && (i + 3) % 3 == 0) {
         console.log(i, i + 1, i + 2);
         return 1;
      }
      else if (A[i] == A[i + 3] && A[i] == A[i + 6] && (i + 6) <= array.length - 1 && A[i] != '') {
         console.log(i, i + 3, i + 6);
         return 1;
      }
      else if ((A[0] == A[4] && A[0] == A[8] && A[0] != '') || (A[2] == A[4] && A[2] == A[6] && A[2] != '')) {
         console.log('diagonal');
         return 1;
      }
   }
}

for (let i = 0; i < A.length; i++) {
   button[i].addEventListener('click', () => {
      if (A[i] == '' && count) {
         button[i].innerHTML = "<img src='./images/cross.png' alt=''>";
         player.innerText = 'Player O`s turn!'
         A[i] = 'X';
         console.log(A);
         count = false;
         Winner = checkWin(A);
         console.log(Winner)
         disable(Winner);
         winner(Winner, 'X')
      }
      else if (A[i] == '' && count == false) {
         button[i].innerHTML = "<img src='./images/zero.png' alt=''>";
         player.innerText = 'Player X`s turn!'
         A[i] = 'O';
         console.log(A);
         count = true;
         Winner = checkWin(A);
         console.log(Winner)
         disable(Winner);
         winner(Winner, 'O')
      }
   })
}

const reset = () => {
   for (let i = 0; i < A.length; i++) {
      button[i].innerHTML = "";
      button[i].disabled=false;
      A[i] = ''
      player.innerText = `Player X's Turn`
      count = true;
   }
}

const ChangeMode = () => {
   if (Mode.style.color == 'white') {
      document.body.style.backgroundColor = "#000000";
      player.style.color = 'white';
      Mode.style.color = "black";
      mode[0].style.backgroundColor = 'aqua';
      Reset.style.backgroundColor='aqua';
      Reset.style.color='black'
      Button.forEach((elem) => {
         elem.style.backgroundColor = '#39B5E0';
      })
   }
   else {
      document.body.style.backgroundColor = "white";
      player.style.color = 'black';
      Mode.style.color = "white";
      mode[0].style.backgroundColor = 'green';
      Button.forEach((elem) => {
         elem.style.backgroundColor = 'green';
      })
      Reset.style.backgroundColor='green';
      Reset.style.color='white'
   }
}
Reset.addEventListener('click', reset);

Mode.addEventListener('click', ChangeMode);