let lastChecked = null;
const checkboxes = document.querySelectorAll('.checkbox');
const login = document.querySelector('.login');
const signin = document.querySelector('.sign-in');
const pfp = document.querySelector('.hidden');
const logoutbtn = document.getElementById('logoutbtn');
const conferma = document.getElementById('conferma');
const verifica = localStorage.getItem('login');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => { // Questo evento viene attivato quando il valore della checkbox cambia
            if (checkbox.checked) { 
                if (lastChecked && lastChecked !== checkbox) { //Se c'è un'altra checkbox selezionata e non è uguale all'ultima allora l'ultima selezionata = false
                    lastChecked.checked = false; 
                }
                lastChecked = checkbox; //Aggiorno la variabile
            }
        });
    });
    if (localStorage.getItem('login') === 'true') {
      pfp.classList.add('logged');
      pfp.classList.remove('hidden'); 
      login.classList.add('hidden'); 
      signin.classList.add('hidden'); 
      } else {
      pfp.classList.add('hidden'); 
      }
    
      logoutbtn.addEventListener('click', function(event){
        event.preventDefault();
        pfp.classList.add('hidden'); 
        login.classList.remove('hidden'); 
        signin.classList.remove('hidden');
        localStorage.removeItem('login');
      });
    if(localStorage.getItem('pfp1') === 'true'){
        pfp.src = "https://avatars.githubusercontent.com/u/121286624?v=4"
        localStorage.removeItem('pfp1');
    }
    if(localStorage.getItem('pfp2') === 'true'){
        pfp.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kebab.JPG/640px-Kebab.JPG"
        localStorage.removeItem('pfp2');
    }
    if(localStorage.getItem('pfp3') === 'true'){
        pfp.src = "https://upload.wikimedia.org/wikipedia/it/thumb/7/77/Pikachu.png/800px-Pikachu.png"
        localStorage.removeItem('pfp3');
    }
