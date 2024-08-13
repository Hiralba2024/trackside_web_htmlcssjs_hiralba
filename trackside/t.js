document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById('myModal');
  var modal1 = document.getElementById('myModal1');
  var submitBtn = document.getElementById('submit-btn');
  var nameInput = document.getElementById('name');
  var mobileInput = document.getElementById('mobile-no');
  var dateInput = document.getElementById('book-date');
  var timeslotsInput = document.getElementById('timeslots');
  var personInput = document.getElementById('person-no');

 
  function validateForm() {
      if (nameInput.value.trim() === '' ||
          mobileInput.value.trim() === '' ||
          dateInput.value === '' ||
          timeslotsInput.value.trim() === '' ||
          personInput.valuen === '') {
          return false;
      }
      return true;
  }

  function clearInputs() {
    nameInput.value = '';
    mobileInput.value = '';
    dateInput.value = '';
    timeslotsInput.value = '';
    personInput.value = '';
}


submitBtn.onclick = function() {
    if (validateForm()) {
        modal.style.display = "block";
        clearInputs();
    } else {
        alert("Please fill all required fields.");
    }
}

  
  function openModal1() {
      modal.style.display = 'none';
      modal1.style.display = 'block';
  }

  

  
  window.addEventListener('message', function(event) {
      if (event.data === 'openModal1') {
          openModal1();
          closeModal();
      }
  });
});
