document.addEventListener('DOMContentLoaded', () => {
  const view1 = document.getElementById('navView1');
  const view2 = document.getElementById('navView2');

  const toggleBtns = document.querySelectorAll('.toggleNavView');

  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      view1.classList.toggle('hidden');
      view2.classList.toggle('hidden');
    });
  });
});
