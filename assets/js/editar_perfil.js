function updateUserDataDisplay() {

  const elementsToUpdate = {
    'userName': ['user-name-display', 'user-name-config', 'welcome-message-home'],
    'userNickname': ['user-nickname-display'], 
    'matricula': ['matricula-display'],
    'birthDate': ['birthdate-display'],
    'phone': ['phone-display'],
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

document.addEventListener('DOMContentLoaded', updateUserDataDisplay);