// Listener para el formulario de registro
document.getElementById('registerForm').addEventListener('submit', async function(e) {
  e.preventDefault(); // Evita recargar la página

  // Obtiene los valores del formulario
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const country = document.getElementById('country').value;

  // Envía la petición POST al endpoint /auth/register
  const response = await fetch('/auth/register', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, password, firstname, lastname, country})
  });

  // Procesa la respuesta
  const data = await response.json();
  if(response.ok) {
    document.getElementById('result').innerText = 'Registro exitoso. Token: ' + data.token;
  } else {
    document.getElementById('result').innerText = 'Error en el registro';
  }
});