// You can add interactive features here if needed
// For example, smooth scrolling or dynamic content loading

console.log("Paba Upazila website loaded successfully!");

// Optional: Add click event to all cards for visual feedback
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('click', function() {
      this.style.transform = 'scale(1.02)';
      this.style.transition = 'transform 0.3s ease';
      
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 300);
    });
  });
  
  // Optional: Add year to footer
  const footer = document.querySelector('.footer');
  if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `© ${currentYear} Rajshahi District Project | Paba Upazila`;
  }
});