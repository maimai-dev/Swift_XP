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
});