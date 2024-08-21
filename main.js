const signUpForm = document.getElementById('signUpForm'),
    button = document.getElementById('button'),
    errorEmpty = document.getElementsByClassName('errorEmpty'),
    errorIncorect = document.getElementsByClassName('errorIncorect'),
    emailInput = document.getElementById('email'),
    newsLetter = document.getElementById('newsLetter'),
    success = document.getElementById('success'),
    okButton = document.getElementById('okButton'),
    successP = document.getElementById('success-p');

const handleSubmit = (e) => {
    e.preventDefault(e);
    
    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    const cusEmail = data.email;
    
    if (cusEmail === '') {
        errorEmpty[0].style.display = 'inline-block';
        emailInput.classList.remove('emailInput');
        emailInput.classList.add('errorForm');
    } else if (!cusEmail.includes('@')) {
        errorEmpty[0].style.display = 'none';
        errorIncorect[0].style.display = 'inline-block';
        emailInput.classList.remove('emailInput');
        emailInput.classList.add('errorForm');
    } else {
        errorEmpty[0].style.display = 'none';
        errorIncorect[0].style.display = 'none';
        emailInput.classList.remove('errorForm');
        emailInput.classList.add('emailInput');
        signUpForm.reset();
        newsLetter.style.display = 'none';
        success.style.display = 'flex';
        successP.innerHTML = `A confirmation email has been sent to ${cusEmail}. Please open it and click the button inside to confirm your subscription.`
    }
}
      
signUpForm.addEventListener('submit', handleSubmit);

okButton.addEventListener('click', function(){
    success.style.display = 'none';
    newsLetter.style.display = 'flex';
})