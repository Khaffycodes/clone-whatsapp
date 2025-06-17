//for sidebar

document.addEventListener('DOMContentLoaded', () => {
  const view1 = document.getElementById('navView1');
  const view2 = document.getElementById('navView2');

  const toggleBtns = document.querySelectorAll('.toggleNavView');

  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Show/hide with animation
      if (view2.classList.contains('hidden')) {
        view2.classList.remove('hidden');
        // Force reflow to apply transition
        void view2.offsetWidth;
        view2.classList.remove('-translate-x-full');
        view2.classList.add('translate-x-0');

        // Hide View1
        // view1.classList.add('hidden');
      } else {
        // Animate out
        view2.classList.remove('translate-x-0');
        view2.classList.add('-translate-x-full');

        // Wait for animation to finish, then hide it and show view1
        setTimeout(() => {
          view2.classList.add('hidden');
          view1.classList.remove('hidden');
        }, 200); // match transition duration
      }
    });
  });
});
