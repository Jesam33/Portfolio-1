const btnElList = document.querySelectorAll('.btn');
btnElList.forEach(btnEl => {
    btnEl.addEventListener('clicl', () => {
    document.querySelector('.special')?.classList.remove ('.special');
    btnEl.classList.add('special')
    });
});