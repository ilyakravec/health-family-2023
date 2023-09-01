const breadcrumbItems = document.querySelectorAll('.breadcrumbs__inner__item');

for (let i = 0; i < breadcrumbItems.length - 1; i++) {
    const slash = document.createElement('div');
    slash.classList.add('slash');
    slash.textContent = '/';
    slash.style.color = '#817b77';
    breadcrumbItems[i].parentNode.insertBefore(slash, breadcrumbItems[i].nextSibling);
}