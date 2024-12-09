document.getElementById('connectButton').addEventListener('click', function() {
    const selectedLanguage = document.getElementById('languageSelect').value;
    const selectedFlag = document.querySelector(`#languageSelect option[value="${selectedLanguage}"]`).dataset.flag;
    
    alert(`Connecting to VPN with language: ${selectedLanguage} ${selectedFlag}`);
    // Here you would add the logic to connect to the VPN
});