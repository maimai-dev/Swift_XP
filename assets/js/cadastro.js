document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('cadastro-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    localStorage.clear();

    const userData = {
      userName: document.getElementById('userName').value,
      userNickname: document.getElementById('userNickname').value,
      email: document.getElementById('email').value,
      matricula: document.getElementById('matricula').value,
      birthDate: document.getElementById('birthDate').value, 
      phone: document.getElementById('phone').value,       
      gender: document.getElementById('gender').value,       
      userPoints: 1500 
    };

    if (userData.birthDate) {
        const date = new Date(userData.birthDate + 'T00:00:00'); 
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        userData.birthDate = date.toLocaleDateString('pt-BR', options);
    }

    for (const key in userData) {
      localStorage.setItem(key, userData[key]);
    }

    localStorage.setItem('userHasLoggedIn', 'true');

    window.location.href = '../inicial/index.html';
  });
});