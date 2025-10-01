document.addEventListener('DOMContentLoaded', function() {
  const loginButton = document.getElementById('login-button');

  if (loginButton) {
    loginButton.addEventListener('click', function(event) {
      event.preventDefault(); 

      if (!localStorage.getItem('userHasLoggedIn')) {
        const userData = {
          userName: 'Lucas Oliveira',
          userNickname: 'Lucas Oliveira',
          matricula: '67776',
          birthDate: '12 Junho 2004',
          phone: '+55 11 98996 1425',
          email: 'lucas.oliveira23@swift.com.br',
          gender: 'Masculino'
        };

        for (const key in userData) {
          localStorage.setItem(key, userData[key]);
        }

        localStorage.setItem('userHasLoggedIn', 'true');
      }

      window.location.href = this.href;
    });
  }
});