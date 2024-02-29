document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            alert(`You clicked ${this.id}`);
            // Here you can also implement the functionality to navigate to different parts of your application based on the clicked menu item
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const adminItem = document.getElementById('admin');

    adminItem.addEventListener('click', function() {
        // Change the location of the browser to navigate to the admin.html page
        window.location.href = 'admin.html';
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        // Get the values from the username and password fields
        const username = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;

        // Check if both the username and password are 'admin'
        if(username === 'admin' && password === 'admin') {
            window.location.href = 'demo.html'; // Navigate to demo.html
        } else {
            // Optionally, alert the user that the credentials are incorrect
            alert('Incorrect username or password. Please try again.');
        }
    });
});


// document.addEventListener('DOMContentLoaded', function() {
//     fetch('/api/admin/count')
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('totalAdmins').textContent = data.count;
//     })
//     .catch(error => console.error('Error fetching admin count:', error));
// });


// const express = require('express');
// const app = express();
// const PORT = 3000;

// // Example admin count. Replace with actual logic to count admins from your database.
// const adminCount = 10;

// app.get('/api/admin/count', (req, res) => {
//     res.json({ count: adminCount });
// });

// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`))



