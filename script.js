window.onload = function() {
    console.log("我的网站加载完成啦！");
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            alert(`你点击了${this.textContent}！`);
        });
    });
};