
// eslint no-plusplus: 2

export default function validateInfo(values) {

    const errors = {}
    errors.length = 0

    if(!values.firstname.trim()) {
        errors.length+=1
        errors.firstname = 'The first name is required!'
       
        
    }else if(values.firstname.length < 3) {
        errors.firstname = 'The first name usually has more than 2 letters'
        errors.length+=1
    }

    if(!values.lastname.trim()) {
        errors.lastname = 'Last name required!'
  
    } else if(values.lastname.length < 3) {
        errors.lastname = 'The last name usually has more than 2 letters'
        errors.length+=1
      
    }
    if(!values.email) {
        errors.email = 'Email required!'
        errors.length+=1
  
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
        errors.length+=1
        
    }
    if(!values.number) {
        errors.number = 'Number is required!'
        errors.length+=1
    } else if(values.number.length < 8) {
        errors.number = 'phone number must have at least 8 numbers!'
        errors.length+=1

    }
       
    if(!values.title) {
        errors.title = 'Title is required!'
        errors.length+=1
    
    }
    if(!values.textarea) {
        errors.textarea = 'Message is required!'
        errors.length+=1
        
    }

    return errors;

}