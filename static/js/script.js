// ----------------------- Toggle Navbar ------------------------ //
function toggleNavbar() {
    var menu = document.getElementById("linksList");
    var navbar = document.getElementById("myNavBar");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        navbar.style.height = "60px";
    } else {
        menu.style.display = "block";
        navbar.style.height = "300px";
    }
}


// Add event listener for restore Navbar on window resize
window.addEventListener('resize', function() {
    var menu = document.getElementById("linksList");
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    // Automatically reset the nav display above 992px
    if (width > 992) {
        menu.style.display = ''; // Clear any inline styles
        var navbar = document.getElementById("myNavBar");
        navbar.style.height = "60px";
    }
});



document.addEventListener('DOMContentLoaded', function() {
    // Ensuring dropdown menus are initially hidden
    var dropdownMenus = document.querySelectorAll('.dropdown-menu');
    dropdownMenus.forEach(function(menu) {
        menu.style.display = 'none';
    });

    var dropdown = document.querySelector('.dropdown-toggle');
    var navbar = document.querySelector('.navbar'); // Get the navbar element

    dropdown.onclick = function(event) {
        event.preventDefault();
        var dropdownMenu = this.nextElementSibling;
        var isVisible = dropdownMenu.style.display === 'block';
        dropdownMenu.style.display = isVisible ? 'none' : 'block';

        // Adjust navbar height only if the screen width is less than 992px
        if (window.innerWidth < 992) {
            adjustNavbarHeight();
        }
    };

    function adjustNavbarHeight() {
        // Check if any dropdown is currently visible
        var anyVisible = Array.from(dropdownMenus).some(menu => menu.style.display === 'block');
        var navbar = document.getElementById("myNavBar");
        // Adjust the navbar height based on the dropdown visibility
        if (anyVisible) {
            navbar.style.height = '420px'; // Expand the height
        } else {
            navbar.style.height = '300px'; // Collapse the height
        }
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        var target = event.target;
        var isDropdown = target.closest('.dropdown');
        if (!isDropdown) {
            dropdownMenus.forEach(function(menu) {
                menu.style.display = 'none';
            });
        }
    });
});


$(document).ready(function () {
    $('.dropdown-item').hover(
      function () {
        $(this).siblings('.popup-screen').css('display', 'inline-flex').fadeIn('fast');
      },
      function () {
        $(this).siblings('.popup-screen').fadeOut('fast', function() {
            $(this).css('display', 'none');
        });
        }
    );
});


// Calculate the required width in JavaScript
function applyDynamicWidth() {
    const vw = window.innerWidth;
    const vwUnit = (1.6 * vw) / 100;
    const squaredVwUnit = vwUnit * vwUnit;
    const newWidth = `calc(100% - ${squaredVwUnit}px)`;
    document.getElementById('dynamicWidth').style.width = newWidth;
};

// Apply the dynamic width on DOM content load
document.addEventListener("DOMContentLoaded", applyDynamicWidth);

// Apply the dynamic width on window resize
window.addEventListener("resize", applyDynamicWidth);
