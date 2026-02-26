// 页面加载完成后执行所有交互逻辑
window.onload = function() {
    // ========== 1. 商品筛选功能 ==========
    // 获取筛选按钮、下拉框、所有商品项
    const filterBtn = document.getElementById('filter-btn');
    const categorySelect = document.getElementById('category-select');
    const goodsItems = document.querySelectorAll('.goods-item');

    // 点击筛选按钮触发筛选
    filterBtn.addEventListener('click', function() {
        // 获取选中的分类
        const selectedCategory = categorySelect.value;
        
        // 遍历所有商品，显示/隐藏对应分类
        goodsItems.forEach(item => {
            if (selectedCategory === 'all' || item.dataset.category === selectedCategory) {
                item.style.display = 'block'; // 显示商品
            } else {
                item.style.display = 'none'; // 隐藏商品
            }
        });

        // 给用户反馈（可选）
        alert(`已筛选：${categorySelect.options[categorySelect.selectedIndex].text}`);
    });

    // ========== 2. 商品详情弹窗功能 ==========
    // 获取弹窗、关闭按钮、弹窗内的元素
    const detailModal = document.getElementById('detail-modal');
    const detailBtns = document.querySelectorAll('.detail-btn');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalImg = document.getElementById('modal-img');
    const modalPrice = document.getElementById('modal-price');
    const modalDesc = document.getElementById('modal-desc');

    // 给每个“查看详情”按钮加点击事件
    detailBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 获取当前按钮所在的商品卡片
            const goodsItem = this.parentElement;
            
            // 从商品卡片中提取信息，填充到弹窗
            modalTitle.textContent = goodsItem.querySelector('h4').textContent;
            modalImg.src = goodsItem.querySelector('img').src;
            modalImg.alt = goodsItem.querySelector('img').alt;
            modalPrice.textContent = goodsItem.querySelector('.price').textContent;
            modalDesc.textContent = goodsItem.querySelector('.desc').textContent;
            
            // 显示弹窗
            detailModal.style.display = 'block';
        });
    });

    // 点击关闭按钮，隐藏弹窗
    closeBtn.addEventListener('click', function() {
        detailModal.style.display = 'none';
    });

    // 点击弹窗外的区域，隐藏弹窗
    window.addEventListener('click', function(e) {
        if (e.target === detailModal) {
            detailModal.style.display = 'none';
        }
    });

    // ========== 3. 导航栏平滑滚动（可选优化） ==========
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止默认跳转
            const targetId = this.getAttribute('href'); // 获取目标板块ID
            const targetElement = document.querySelector(targetId);
            
            // 平滑滚动到目标板块
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
};