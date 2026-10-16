const progressBar = document.querySelector('.progress-bar');
const items = document.querySelectorAll('.faq-item');

items.forEach((item)=>{
    item.addEventListener('click',()=>{
        const isActive = item.classList.contains('active');

        items.forEach((i)=> i.classList.remove('active'));
        if(!isActive){
            item.classList.add('active');
        }
    })
})

window.addEventListener('scroll', () => {
    if (!progressBar) return;

    const scrollTop = window.scrollY;

    const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollableHeight > 0
        ? Math.round((scrollTop / scrollableHeight) * 100)
        : 0;

    progressBar.style.width = `${progress}%`;
});