
const errorContainer = document.getElementById('errors');
const form = document.getElementById('form');
	
	let errors =  [];
	
	form.addEventListener('submit', (event) => {
	    event.preventDefault();
	        errors = [];
	    const f = Object.values(form);
	
	    for (const input of f) {
	        console.log(`Input ${input.id} has value ${input.value} ${input.checked}`);
	
	        input.classList.remove('error');
	
	        switch (input.id) {
	            case 'email':
	                isValid  = validateEmail(input.value);
	                break;
                    //walidacja mail
	            case 'name':
	                isValid  = validateName(input.value);
	                break;
                    //walidacja nazwy
	            case 'body':
	                isValid  = validateBody(input.value);
	                break;
                    //walidacjaa body
	            case 'agree':
	                isValid = validateAgreement(input.checked);
	                break;
                    //walidacja zgody 
	            default:
	                break;
	        }
	
	        if (!isValid){
	            highlightInput(input);
	        }
	
	    }
	
	        console.log(errors);
	    
	    if(isValid){
	        
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
	    const isNotEmpty = name.length > 0 ;
	   
	    const isCapitalized = /[A-Z][a-zA-Z\-]+/.test(name);
	
	    isValid = isCapitalized && isNotEmpty;
	
	    if(!isValid){
	        errors.push('Name wrong');
	    }
	
	    return isValid;
	}
	
	function validateBody(body){
	    const isNotEmpty = body.length > 0 ;
	    
	    const isMinLength = body.length > 50; 
	    const isMaxLength = body.length < 500;
	
	    isValid = isNotEmpty && isMinLength && isMaxLength;
	
	    if(!isValid){
	        errors.push('Body is wrong');
	    }
	
	    return isValid;
	}
	
	function validateAgreement(agreement){
	    if(!agreement){
	        errors.push(' You have to agree!');
	    }
	
	    return agreement;
	}
	
	function highlightInput(input){
	    input.classList.add('error');
	}

