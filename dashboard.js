function showContent(contentType) {
    // 隐藏所有内容区域
    document.getElementById('managerContent').style.display = 'none';
    document.getElementById('staffContent').style.display = 'none';
    document.getElementById('bulletinContent').style.display = 'none';
    document.getElementById('bulletinContent_1').style.display = 'none';
    document.getElementById('bulletinContent_2').style.display = 'none';

    // 显示选中的内容区域
    switch(contentType) {
        case 'manager':
            document.getElementById('managerContent').style.display = 'block';
            break;
        case 'staff':
            document.getElementById('staffContent').style.display = 'block';
            break;
        case 'bulletin':
            document.getElementById('bulletinContent').style.display = 'block';
            document.getElementById('bulletinContent_1').style.display = 'block';
            document.getElementById('bulletinContent_2').style.display = 'block';
            break;
    }
}

function searchPage() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (!searchTerm) return;

    // 获取所有内容区域
    const contentAreas = document.querySelectorAll('.content-area');
    let foundMatch = false;

    contentAreas.forEach(area => {
        const content = area.textContent.toLowerCase();
        if (content.includes(searchTerm)) {
            // 显示匹配的内容区域
            area.style.display = 'block';
            // 高亮匹配文本
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            area.innerHTML = area.innerHTML.replace(regex, '<span class="highlight">$1</span>');
            // 滚动到第一个匹配项
            if (!foundMatch) {
                area.scrollIntoView({behavior: 'smooth'});
                foundMatch = true;
            }
        } else {
            area.style.display = 'none';
        }
    });

    if (!foundMatch) {
        alert('未找到匹配内容');
    }
}

// 默认显示领班信息
showContent('manager');
