const textArea = document.getElementById('editor');

textArea.value = localStorage.getItem('text');
textArea.oninput = () => {
      localStorage.setItem('text', textArea.value)
    };
