console.log('Formulario de números')

const $f = document.getElementById('frm')
const $n = document.getElementById('numero')
const $out = document.getElementById('salida')

$f.addEventListener('submit', async (e) => {
  e.preventDefault()
  const numero = parseFloat($n.value)

  if (!Number.isFinite(numero)) {
    $out.textContent = JSON.stringify({ error: 'Ingresá un número válido' }, null, 2)
    return
  }

  try {
    const res = await fetch('/numeros/entrada', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ numero })
    })
    const data = await res.json()
    $out.textContent = JSON.stringify(data, null, 2)
  } catch (err) {
    $out.textContent = JSON.stringify({ error: String(err) }, null, 2)
  }

  $n.value = ''
  $n.focus()
})
