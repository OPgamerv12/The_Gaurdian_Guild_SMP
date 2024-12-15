// Open Modal with the clicked image
function openModal(imgSrc) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'block';
    modalImg.src = imgSrc;
  }
  
  // Close the modal when clicked
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  