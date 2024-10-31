// Smooth scrolling for internal navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1); // 去掉 #
        showSection(sectionId); // 调用显示特定 section 的函数
        document.querySelector(`#${sectionId}`).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// 获取所有菜单项
const menuLinks = document.querySelectorAll('nav a');

function showSection(sectionId) {
    // 隐藏所有 section
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // 显示当前 section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        if (sectionId === 'photo-about') {
            selectedSection.style.display = 'flex'; // "photo-about" 部分使用 flex
        } else {
            selectedSection.style.display = 'block'; // 其他部分使用 block
        }
    }

    // 更新菜单项的激活状态
    menuLinks.forEach(link => {
        link.classList.remove('active'); // 移除所有链接的活动状态
        if (link.getAttribute('href').substring(1) === sectionId) {
            link.classList.add('active'); // 为当前 section 的链接添加活动状态
        }
    });
}

// 默认显示的 section（例如 "about"）
window.onload = function() {
    showSection('photo-about'); // 加载时显示 "photo-about" 部分
};

function openModal(imageSrc, title, description) {
    document.getElementById("art-modal").style.display = "flex";
    document.getElementById("modal-image").src = imageSrc;
    document.getElementById("modal-caption").innerHTML = `<h3>${title}</h3><p>${description}</p>`;
}

function closeModal() {
    document.getElementById("art-modal").style.display = "none";
}
