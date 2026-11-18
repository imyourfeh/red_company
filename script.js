
    try {
        if (localStorage.getItem('cookiesAceitos') === 'sim') {
            document.getElementById('cookie-banner').style.setProperty('display', 'none', 'important');
        }
    } catch (e) {}
