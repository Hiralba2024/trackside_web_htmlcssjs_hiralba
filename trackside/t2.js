document.addEventListener('DOMContentLoaded', function() {
    var bookButton = document.querySelector('.book');
    var seatTrain = document.getElementById('seatTrain');

    bookButton.addEventListener('click', function() {
        // Add the class to trigger the animation
        seatTrain.classList.add('slide-up');
    });
});