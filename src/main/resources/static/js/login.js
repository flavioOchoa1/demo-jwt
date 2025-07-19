document.getElementById('loginForm').addEventListener('submit', async function(e) {
  e.preventDefault(); // Evita que la página se recargue al enviar el formulario

  // Obtiene los valores ingresados por el usuario
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Realiza una petición POST al endpoint /auth/login con los datos del usuario
  const response = await fetch('/auth/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, password})
  });

  // Procesa la respuesta del backend
  const data = await response.json();
  if(response.ok) {
    // Si el login es exitoso, muestra el token JWT recibido
    document.getElementById('result').innerText = 'Token: ' + data.token;
  } else {
    // Si falla, muestra un mensaje de error
    document.getElementById('result').innerText = 'Error de inicio de sesión';
  }
});