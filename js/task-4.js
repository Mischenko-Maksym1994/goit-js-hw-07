const form = document.querySelector("form");

form.addEventListener("submit", event => {
    event.preventDefault();
    
    // email.trim();
    // password.trim();

    const formElement = event.target;
    const email = formElement.elements.email.value.trim();
    const password = formElement.elements.password.value.trim();

    if (email === "" || password === "") {
        return alert('All form fields must be filled in');
    } else {
        let user = {
            email: "",
            password: "",
        };
        
        user.email = email;
        user.password = password;
        console.log(user);
    }
    form.reset();
});

