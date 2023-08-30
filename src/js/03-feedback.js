import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const KEY_OF_LOCALSTORAGE = "feedback-form-state";
let formData = {};

form.addEventListener("input", throttle(saveMessage, 500));

function saveMessage(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(KEY_OF_LOCALSTORAGE, JSON.stringify(formData));
}

form.addEventListener('submit', submitFormOn);

function submitFormOn(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(KEY_OF_LOCALSTORAGE)));
    e.currentTarget.reset();
    localStorage.removeItem(KEY_OF_LOCALSTORAGE);
}

function updateForm() {
    let data = localStorage.getItem(KEY_OF_LOCALSTORAGE);
    if (data) {
        data = JSON.parse(data);
        Object.entries(data).forEach(([name, value]) => {
            formData[name] = value;
            form.elements[name].value = value;
        });
    }
}

updateForm();