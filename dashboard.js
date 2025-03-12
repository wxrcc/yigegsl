function navigate(destination) {
    switch(destination) {
        case 'manager':
            alert('跳转到领班页面');
            // window.location.href = 'manager.html';
            break;
        case 'staff':
            alert('跳转到员工页面');
            // window.location.href = 'staff.html';
            break;
        case 'bulletin':
            alert('跳转到公示栏页面');
            // window.location.href = 'bulletin.html';
            break;
        default:
            console.error('未知的目标页面');
    }
}
