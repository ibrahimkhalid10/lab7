document.getElementById('colorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get color input value
    var color = document.getElementById('colorInput').value;

    // Change header text color
    document.getElementById('header').style.color = color;
});
