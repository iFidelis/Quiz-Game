const username= document.querySelector('#fname');
const enterBtn = document.querySelector('.btn-primary');

username.addEventListener('keyup', (e) => {
    enterBtn.disabled = !username.value;
});

enterBtn.addEventListener("click", (e) => {
    window.location.href = "welcome.html";
    localStorage.setItem("username", username.value);
    e.preventDefault()
});