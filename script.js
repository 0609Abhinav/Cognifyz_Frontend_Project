
function changeBackground() {
  document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let valid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');

  if (!name.value.trim()) {
    name.classList.add('is-invalid');
    valid = false;
  } else {
    name.classList.remove('is-invalid');
  }

  if (!email.value.trim() || !email.value.includes('@')) {
    email.classList.add('is-invalid');
    valid = false;
  } else {
    email.classList.remove('is-invalid');
  }

  if (valid) {
    alert('Form submitted successfully!');
  }
});

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('apiData');
    data.slice(0, 5).forEach(user => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = `${user.name} (${user.email})`;
      list.appendChild(li);
    });
  });
