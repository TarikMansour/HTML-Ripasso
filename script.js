let lastChecked = null;
const checkboxes = document.querySelectorAll('.checkbox');
const login = document.querySelector('.login');
const signin = document.querySelector('.sign-in');
const pfp = document.querySelector('.hidden');
const logoutbtn = document.getElementById('logoutbtn');
const conferma = document.getElementById('conferma');
const verifica = localStorage.getItem('loggedin');
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
    if (localStorage.getItem('elementClass') === 'logged') {
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
        localStorage.removeItem('elementClass');
      });
      conferma.addEventListener('click', function(event){
        event.preventDefault();
        pfp.classList.add('logged'); 
        pfp.classList.remove('hidden'); 
        login.classList.add('hidden'); 
        signin.classList.add('hidden'); 
        localStorage.setItem('elementClass', 'logged');
      })
