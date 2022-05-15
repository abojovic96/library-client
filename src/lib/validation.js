export function validateInput(input){
    if(!input){
        return false;
    }

    return true;
}

export function confirmPassword(passward, confirmPass){
    if(passward !== confirmPass){
        return false;
    };

    return true;
};

export function validateEmail(email){
    if(email.inculdes('@')){
        return true;
    };

    return false;
};