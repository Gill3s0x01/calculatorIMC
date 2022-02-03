import { useState } from 'react'
import './App.css'

export default function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [message, setMessage] = useState('')

  function calcIMC() {
    const alt = height / 100
    const imc = weight / (alt * alt)

    if (imc < 18.5) {
      return setMessage('Abaixo do peso irmão! se cuida! ' + imc.toFixed(2))
    } else if (imc >= 18.5 && imc < 25) {
      return setMessage('Peso normal, seu gostoso! ' + imc.toFixed(2))
    } else if (imc >= 25 && imc < 30) {
      return setMessage('Sobrepeso, ta ficando gordão' + imc.toFixed(2))
    } else if (imc >= 30 && imc < 35) {
      return setMessage(
        'Obesidade grau 1, carai ta ficando gordão' + imc.toFixed(2)
      )
    } else if (imc >= 35 && imc < 40) {
      return setMessage(
        'Obesidade grau 2, ta ficando muito gordão' + imc.toFixed(2)
      )
    } else if (imc >= 40) {
      return setMessage(
        'Obesidade grau 3, mano vai pro medico vc vai explodir' + imc.toFixed(2)
      )
    }
  }
  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>
      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em (Kg) Ex: 110Kg"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="Altura em cm Ex:180"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <button onClick={calcIMC}>Calcular</button>
        <h2>{message}</h2>
      </div>
    </div>
  )
}
