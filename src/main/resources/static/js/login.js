document.getElementById('loginForm').addEventListener('submit', async function(e) {
  e.preventDefault(); // Evita recargar la página

  // Obtiene los valores del formulario
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = ""; // Limpia mensajes previos

  // Envía la petición POST al backend
  const response = await fetch('/auth/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, password})
  });

  if(response.ok) {
    // Si el login es exitoso, muestra el token
    const data = await response.json();
    resultDiv.innerHTML = `<div class="alert alert-success fade show" role="alert">
      <strong>¡Login exitoso!</strong> Token: ${data.token}
    </div>`;
  } else {
    // Si falla, muestra mensaje de error en rojo
    resultDiv.innerHTML = `<div class="alert alert-danger fade show" role="alert">
      <strong>Error:</strong> Usuario o contraseña incorrecta
    </div>`;
  }
});