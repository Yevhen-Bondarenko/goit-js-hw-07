const link1 = document.createElement('link');
link1.rel = 'preconnect';
link1.href = 'https://fonts.googleapis.com';

const link2 = document.createElement('link');
link2.rel = 'preconnect';
link2.href = 'https://fonts.gstatic.com';
link2.crossOrigin = ''; // Додаємо атрибут crossorigin

const link3 = document.createElement('link');
link3.href =
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap';
link3.rel = 'stylesheet';

const head = document.head;

head.appendChild(link1);
head.appendChild(link2);
head.appendChild(link3);

const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  const inputText = nameInput.value.trim();

  if (inputText === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = inputText;
  }
});
