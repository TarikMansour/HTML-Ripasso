const button = document.getElementById('enter');
button.addEventListener('click', function(){
    localStorage.setItem('login', 'true');
});
