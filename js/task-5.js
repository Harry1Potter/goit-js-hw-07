function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, 0)}`;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const changeColorButton = document.querySelector('.change-color');
    const colorSpan = document.querySelector('.color');
    const body = document.body;
  
    changeColorButton.addEventListener('click', () => {
      const newColor = getRandomHexColor();
      body.style.backgroundColor = newColor;
      colorSpan.textContent = newColor;
    });
  });
  