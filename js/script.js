const form = document.querySelector('#userForm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const list = document.querySelector('#users');

let users = [];

const listUsers = () => {
    list.innerHTML = '';

    users.forEach(person => {
        list.innerHTML += `
        <div id="users" class="d-inline-block">
        <div class="user bg-light">
            <div>
                <div>${person.firstName} ${person.lastName}</div>
                <div class="small">${person.email}</div>
            </div>
            <div>
                <button class="btn btn-edit"><i class="fas fa-edit"></i></button>
                <button class="btn"><i class="fas fa-trash"></i></button>
            </div>
        </div>
        </div>
        `
        
        

      
    })
}

form.addEventListener('sumbit', (e)=> {
    e.preventDefault();
    
    let person = {
        id: Math.floor((Math.random() * 10000000000) +1).toString(),
        firstName: firstName.value, 
        lastName: lastName.value, 
        email: email.value 
    }

    if(firstName.value == '') {
        alert("Fyll i ditt förnamn");
        person.classList.remove('is-invalid');
    } else if (lastName.value == '') {
        alert("Fyll i ditt efternamn");
        person.classList.remove('is-invalid');
    } else if (email.value == '') {
        alert("Fyll i din e-postadress");
        person.classList.remove();
    } else {
        users.push(person);
    }

    listUsers();

})

// list.addEventListener('submit', (e) => {
//     e.preventDefault();
//     users = users.filter(user => user.id !== e.target.parentNode.id)
//     listUsers();
// })

listUsers();
console.log(users);