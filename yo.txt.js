const button = document.getElementById('theme-swap');

button.addEventListener('click', () => {
const elements = document.getElementsByTagName('html');
const html  = elements[0];

if (html.classList.contains('light')) {
    html.classList.remove('light')
button.innerText = "🌞";

}

else{
    html.classList.add('light')
button.innerText = "🌚"
}

});

function getTheme(){
    const theme= localStorage.getItem('theme');

    if('theme' === 'light') {
        return 'light';
    }
    return 'dark';
}

function setTheme() {
    i
}
