function updateUserDataDisplay() {
  const elementsToUpdate = {
    userName: ["user-name-display", "user-name-config", "welcome-message-home"],
    userNickname: ["user-nickname-display"],
    matricula: ["matricula-display"],
    birthDate: ["birthdate-display"],
    phone: ["phone-display", "user-phone-header"],
    email: ["email-display"],
    gender: ["gender-display"],
    userPoints: ['user-points-balance', 'user-points-home', 'user-points-config']
  };
  for (const key in elementsToUpdate) {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      elementsToUpdate[key].forEach((elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
          if (elementId === "welcome-message-home") {
            element.textContent = `Olá, ${storedValue}`;
          } else if (key === 'userPoints') {
            element.textContent = parseInt(storedValue).toLocaleString('pt-BR');
          } else {
            element.textContent = storedValue;
          }
        }
      });
    }
  }
}

if (document.getElementById("edit-name-form")) {
  const form = document.getElementById("edit-name-form");
  const input = document.getElementById("full-name-input");
  input.value = localStorage.getItem("userName") || "Lucas Oliveira";
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const newName = input.value.trim();
    if (newName) {
      localStorage.setItem("userName", newName);
      history.back();
    }
  });
}

if (document.getElementById("edit-phone-form")) {
  const form = document.getElementById("edit-phone-form");
  const input = document.getElementById("phone-input");
  input.value = localStorage.getItem("phone") || "+55 11 98996 1425";
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const newPhone = input.value.trim();
    if (newPhone) {
      localStorage.setItem("phone", newPhone);
      history.back();
    }
  });
}

if (document.getElementById("edit-email-form")) {
  const form = document.getElementById("edit-email-form");
  const input = document.getElementById("email-input");
  input.value =
    localStorage.getItem("email") || "lucas.oliveira23@swift.com.br";
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const newEmail = input.value.trim();
    if (newEmail) {
      localStorage.setItem("email", newEmail);
      history.back();
    }
  });
}

if (document.getElementById("edit-gender-form")) {
  const form = document.getElementById("edit-gender-form");
  const select = document.getElementById("gender-select");

  select.value = localStorage.getItem("gender") || "Masculino";

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const newGender = select.value;
    localStorage.setItem("gender", newGender);
    history.back();
  });
}

if (document.getElementById("edit-username-form")) {
  const form = document.getElementById("edit-username-form");
  const input = document.getElementById("username-input");
  input.value = localStorage.getItem("userNickname") || "Lucas Oliveira";
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const newValue = input.value.trim();
    if (newValue) {
      localStorage.setItem("userNickname", newValue);
      history.back();
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  updateUserDataDisplay();
  const copyButton = document.getElementById("copy-button");
  const matriculaCode = document.getElementById("matricula-display");
  if (copyButton && matriculaCode) {
    copyButton.addEventListener("click", function () {
      navigator.clipboard.writeText(matriculaCode.textContent).then(() => {
        showToast("Código de matrícula copiado!");
      });
    });
  }
  const changePhotoButton = document.getElementById("change-photo-button");
  const fileInput = document.getElementById("file-input");
  const avatarImage = document.getElementById("avatar-image");
  if (changePhotoButton && fileInput && avatarImage) {
    changePhotoButton.addEventListener("click", function () {
      fileInput.click();
    });
    fileInput.addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          avatarImage.src = e.target.result;
          showToast("Foto de perfil atualizada!");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  const logoutButton = document.getElementById("logout-button");
  if (logoutButton) {
    logoutButton.addEventListener("click", function (event) {
      event.preventDefault();

      const userConfirmed = confirm(
        "Tem a certeza de que deseja sair? Todas as alterações não salvas serão perdidas."
      );

      if (userConfirmed) {
        localStorage.clear();
        window.location.href = "../../index.html";
      }
    });
  }
});
