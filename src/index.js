const login = prompt('Enter login');
const password = prompt('Enter password');

if (login === 'admin') {
  if (password === 'qwerty1234') {
    alert('Hello, admin');
  } else {
    alert('Incorrect info');
  }
} else if (login === 'Guest') {
  if (password === 'guest666') {
    alert('Hello, guest');
  } else {
    alert('Incorrect info');
  }
} else {
  alert('Go away');
}
