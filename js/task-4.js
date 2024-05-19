document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
  
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const formData = {};
  
      Array.from(loginForm.elements).forEach((element) => {
        if (element.tagName === 'INPUT' && element.type !== 'submit') {
          const inputName = element.name;
          const inputValue = element.value.trim();
  
          if (!inputValue) {
            alert('All form fields must be filled in');
            return;
          }
  
          formData[inputName] = inputValue;
        }
      });
  
      console.log(formData);
  
      loginForm.reset();
    });
  });
  