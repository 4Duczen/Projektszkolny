const form = document.getElementById('form');

let errors =  [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
        errors = [];
    const f = Object.values(form);

    for (const input of f) {
        console.log(`Input ${input.id} has value ${input.value}`);

        input.classList.remove('error');

        switch (input.id) {
            case 'email':
                isValid  = validateEmail(input.value);
                break;
            case 'name':
                // walidacja imienia
                break;
            case 'body':
                // walidacja tekstu
                break;
            case 'agree':
                // walidacja zgody
                break;
            default:
                break;
        }

        if (!isValid){
            highlightInput(input);
        }

    }

        console.log(errors);

    // form.submit();
});

function validateEmail(email){
    const hasAt = email.includes('@');
    const hasDot = email.includes('.');
    const count = email.split(/\@|\./).length;

    const isValid = hasDot && hasAt && (count >= 3);

    if (!isValid){
        errors.push('Email wrong');
    }

    return isValid;
}

function highlightInput(input){
    input.classList.add('error')

}