document.querySelector('.subscription').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Get form data
    var formData = new FormData(this);

    // Send AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'processSubscription.php', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Success response, update UI or show a message
                document.querySelector('.subscription').classList.add('done'); // Add the "done" class
                console.log(xhr.responseText); // Log the response for debugging
            } else {
                // Handle errors
                console.log('Error:', xhr.status);
            }
        }
    };
    xhr.send(formData);
});
