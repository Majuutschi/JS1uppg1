const form = document.querySelector('#form');
const output = document.querySelector('#output');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');

let users = [];

const listUsers = (users) => {

    output.innerHTML = '';
    users.forEach(user => {

        let userData = `
        <div class="bg-light user-back">
            <div id="${user.id}" class="user">
                <div class="text">
                    <h3>${user.firstName} ${user.lastName}</h3>
                    <small>${user.email}</small>
                </div>
                <div class="buttons">
                    <button class="btn btn-green">Redigera</button>
                    <button class="btn btn-lila">Radera</button>
                </div>
            </div>
        </div>
        `


        output.innerHTML += userData;
    })
}

const validateName = id => {
    const input = document.querySelector('#' +id);
    const error = document.querySelector('#' +input.id+ '-error');

    if(input.value === '') {
        error.innerText = 'Ange ett namn';
        return false;
    } else if(input.value.length < 2) {
        error.innerText = 'Namnet måste vara minst 2 bokstäver';
        return false;
    }
    else {
        error.innerText = '';
        return true;
    }
}

const validateEmail = id => {
    const input = document.querySelector('#' +id);
    const error = document.querySelector('#' +input.id+ '-error');

    let regEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

    if(regEx.test(input.value)) {
        error.innerText = '';
        return true;
    } else {
        error.innerText = 'Ange en giltig e-postadress';
        return false;
    }
}

const validate = () => {

    document.querySelectorAll('input').forEach(input => {
            
        if(input.type === "text") {
            validateName(input.id);
        } 

        if(input.type === "email") {
            validateEmail(input.id);
        }

    })
}

const createUser = (firstName, lastName, email) => {
    let user = {
        id: Date.now().toString(),
        firstName,
        lastName,
        email
    }

    users.push(user);
    console.log(users);
}

listUsers(users);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validate();
    
    if(validateName('firstName') && validateName('lastName') && validateEmail('email')) {
        
        createUser(firstName.value, lastName.value, email.value);
        listUsers(users);
        form.reset();
        firstName.focus();
    }

})

output.addEventListener('click', e => {

    if(e.target.classList.contains('btn-lila')) {
        const deleteUser = () => {
            
        }
        listUsers(users);
        console.log('Radera')
    }

    if(e.target.classList.contains('btn-green')) {
        
        console.log('Redigera')
    }
})






