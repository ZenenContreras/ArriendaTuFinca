const wrapper1 = document.querySelector('.wrapper1');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    wrapper1.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper1.classList.remove('active');
});
