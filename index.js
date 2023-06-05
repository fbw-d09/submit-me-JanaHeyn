// Your code here
const formElement = document.getElementById('submit-form');
const userInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const messageInput = document.getElementById('message');
const checkboxInput = document.getElementById('checkbox');

const addUser = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: 
        {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            username: userInput.value,
            email: emailInput.value,
            password: passwordInput.value,
            message: messageInput.value,
            checkbox: checkboxInput.value,
        })
    });

    const dataObject = await data.json();
    // console.log(JSON.parse(dataObject));
    console.log(dataObject);
    // console.log(dataObject.id);
    // console.log(`name: ${dataObject.n}`);
    alert(`Thank you for submitting your details.\nUser ID: ${dataObject.id}`);

}

formElement.addEventListener('submit', e => {
    e.preventDefault();
    addUser();
})