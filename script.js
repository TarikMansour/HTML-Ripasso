let lastChecked = null;
const checkboxes = document.querySelectorAll('.checkbox');

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