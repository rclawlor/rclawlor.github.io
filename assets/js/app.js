var menuItems = document.querySelectorAll('.vertical-menu a');

menuItems.forEach(function(item) {
    // Compare the current page URL with the menu item's URL
    if (item.href === window.location.href) {
        item.classList.add('active');
    }

    item.addEventListener('click', function() {
        // Remove active class from all menu items
        menuItems.forEach(function(item) {
            item.classList.remove('active');
        });

        // Add active class to the clicked menu item
        this.classList.add('active');
    });
});