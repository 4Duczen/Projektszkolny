const form = document.getElementById('form');
const errorContainer = document.getElementById('errors');

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
    for (const e of errors ){
        
        errorContainer.innerText += e;
    }

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

function validateName(name){
    const isNotEmpty = name.length > 0;
    const isCapitalized = /[A-Z][a-zA-Z\-]+/.test(name);
    isValid = isCapitalized && isNotEmpty;
}
    

return isValid;


function validateBody(body){
    const isNotEmpty = body.length > 0 ;
    
    const isMinLength = body.length > 50; 
    const isMaxLength = body.length < 500;

    isValid = isNotEmpty && isMinLength && isMaxLength;

    if(!isValid){
        errors.push('BODYwrong');
    }

    return isValid;
}

function validateAgreement(agreement){
    if(!agreement){
        errors.push('AGREE THIS U ///');
    }

    return agreement;
}

function highlightInput(input){
    input.classList.add('error')

}