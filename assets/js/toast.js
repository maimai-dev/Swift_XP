function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.className = 'toast-notification';
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 500);
  }, 3000);
}