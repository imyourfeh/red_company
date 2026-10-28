<script>
document.addEventListener('DOMContentLoaded', function () {
    var banner = document.getElementById('cookie-banner');
    var btn = document.getElementById('btn-aceitar');

    if (!banner || !btn) return;

    // 1. Tenta verificar a decisão salva com proteção contra bloqueio
    var aceito = false;
    try {
        aceito = localStorage.getItem('cookiesAceitos') === 'sim';
    } catch (e) {
        aceito = false;
    }

    // 2. Se já aceitou, oculta imediatamente
    if (aceito) {
        banner.style.display = 'none';
        return;
    }

    // 3. Adiciona o clique para aceitar e fechar
    btn.addEventListener('click', function () {
        try {
            localStorage.setItem('cookiesAceitos', 'sim');
        } catch (e) {
            console.warn('Erro ao salvar preferencia:', e);
        }

        // Esconde instantaneamente
        banner.style.display = 'none';
    });
});
</script>