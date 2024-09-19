let lastChecked = null;
const checkboxes = document.querySelectorAll('.checkbox');
const login = document.querySelector('.login');
const signin = document.querySelector('.sign-in');
const pfp = document.querySelector('.hidden');
const logoutbtn = document.getElementById('logoutbtn');
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
    
      if(verifica === 'true'){
        pfp.className = 'logged';
        login.className ='hidden';
        signin.className ='hidden';
      }
      logoutbtn.addEventListener('click', function(event){
        event.preventDefault();
        pfp.className='hidden';
        login.className ='login';
        signin.className ='sign-in';
      })