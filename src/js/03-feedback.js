import throttle from "lodash.throttle";

const mailRef = document.querySelector('input')
const commentRef = document.querySelector('textarea')
const formRef = document.querySelector('.feedback-form')
const submitBtnRef = document.querySelector('button')

formRef.addEventListener('input', throttle(setData, 5000));
submitBtnRef.addEventListener('click', onBtn);

const formField = {
    email: '',
    comment: '',
};


if (localStorage.getItem('feedback-form-state')!==null) {
    const storage = JSON.parse(localStorage.getItem('feedback-form-state'));
    mailRef.value = storage.email;
    commentRef.value = storage.comment;
};

function setData({ target: { name, value } }) {
    formField[name] = value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formField));
}


function onBtn(event) {
    event.preventDefault();
    formRef.reset();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
}