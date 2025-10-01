document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('copy-button');
    const matriculaCode = document.getElementById('matricula-code');

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