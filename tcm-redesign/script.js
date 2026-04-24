const chatToggle = document.querySelector('#chatToggle');
const chatBox = document.querySelector('#chatBox');

if (chatToggle && chatBox) {
  chatToggle.addEventListener('click', () => {
    const isHidden = chatBox.hasAttribute('hidden');
    if (isHidden) {
      chatBox.removeAttribute('hidden');
      chatToggle.textContent = 'Chat schließen';
    } else {
      chatBox.setAttribute('hidden', '');
      chatToggle.textContent = 'Chat öffnen';
    }
  });
}
