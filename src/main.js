document.addEventListener('DOMContentLoaded', () => {
  const view1 = document.getElementById('sidebar-display1');
  const view2 = document.getElementById('sidebar-display2');

  const toggleBtns = document.querySelectorAll('.toggleNavView');

  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      view1.classList.toggle('hidden');
      view2.classList.toggle('hidden');
    });
  });
});
