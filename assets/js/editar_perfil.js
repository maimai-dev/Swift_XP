function updateUserDataDisplay() {
  const elementsToUpdate = {
    'userName': ['user-name-display', 'user-name-config', 'welcome-message-home'],
    'userNickname': ['user-nickname-display'],
    'matricula': ['matricula-display'],
    'birthDate': ['birthdate-display'],
    'phone': ['phone-display', 'user-phone-header'],
    'email': ['email-display'],
    'gender': ['gender-display']
  };

  for (const key in elementsToUpdate) {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      elementsToUpdate[key].forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) {
          if (elementId === 'welcome-message-home') {
            element.textContent = `Olá, ${storedValue}`;
          } else {
            element.textContent = storedValue;
          }
        }
      });
    }
  }
}

if (document.getElementById('edit-name-form')) {
  const form = document.getElementById('edit-name-form');
  const input = document.getElementById('full-name-input');

  input.value = localStorage.getItem('userName') || 'Lucas Oliveira';

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const newName = input.value.trim();
    if (newName) {
      localStorage.setItem('userName', newName);
      history.back();
    }
  });
}

if (document.getElementById('edit-phone-form')) {
  const form = document.getElementById('edit-phone-form');
  const input = document.getElementById('phone-input');

  input.value = localStorage.getItem('phone') || '+55 11 98996 1425';

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const newPhone = input.value.trim();
    if (newPhone) {
      localStorage.setItem('phone', newPhone);
      history.back();
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  updateUserDataDisplay();

  const copyButton = document.getElementById('copy-button');
  const matriculaCode = document.getElementById('matricula-display'); 

  if (copyButton && matriculaCode) {
      copyButton.addEventListener('click', function() {
          navigator.clipboard.writeText(matriculaCode.textContent).then(() => {
              showToast('Código de matrícula copiado!');
          }).catch(err => {
              console.error('Erro ao copiar texto: ', err);
              showToast('Erro ao copiar.');
          });
      });
  }

  const changePhotoButton = document.getElementById('change-photo-button');
  const fileInput = document.getElementById('file-input');
  const avatarImage = document.getElementById('avatar-image');

  if (changePhotoButton && fileInput && avatarImage) {
      changePhotoButton.addEventListener('click', function() {
          fileInput.click(); 
      });

      fileInput.addEventListener('change', function(event) {
          const file = event.target.files[0];

          if (file) {
              const reader = new FileReader();
              reader.onload = function(e) {
                  avatarImage.src = e.target.result;
                  showToast('Foto de perfil atualizada!');
              }
              reader.readAsDataURL(file);
          }
      });
  }
});