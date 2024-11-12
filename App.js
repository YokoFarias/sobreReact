import Title from './components/index'
import Button from './components/Button'
import Greeting from './components/Greeting'
import Card from './components/Card'


function App() {
  return (
    <div>
    <Title text= 'Estudo sobre React' />
    <Button label= "Enviar" />
    <Button label= "Cancelar" />
    <Button label= "Voltar" />
    <Greeting name= 'Bruno' />
    <Greeting name= 'Angélica' />
    <Greeting name= 'Pat' />
    <Card>
      <h2>Card Bem Vindo!</h2>
      <p>Este é um card de boas vidas</p>
    </Card>
    </div>
  );
}

export default App;
