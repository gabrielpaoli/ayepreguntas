import { useCallback, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import data from './components/test';

function App() {

  const createRandomNumber = () => {
    let random = Math.floor(Math.random() * data.length);
    return random;
  }

  const [rand, setRand] = useState(createRandomNumber());

  const handleQuestion = () => {
    const containerQuestion = document.querySelector('#container-question');
    containerQuestion.innerHTML = data[rand].question;
    const containerAnswer = document.querySelector('#container-answer');
    containerAnswer.innerHTML = "";
  }

const handleAnswer = () => {
  const containerAnswer = document.querySelector('#container-answer');
  containerAnswer.innerHTML = data[rand].answer;
}

return (
    <div style={{ height: "70vh"}} className='container-fluid d-flex text-center justify-content-center align-items-center flex-wrap w-100'>

      <h2 className='w-100'>Vamo que la Aye aprueba</h2>

      <Button variant="warning" size='lg' onClick={() => {setRand(createRandomNumber()); handleQuestion()}}>
            Preguntar
      </Button>

        <div id="container-question" className='border rounded bg-violet p-2 w-100'>
          {data[rand].question}
        </div>
        <Button variant="danger" size='lg' onClick={() => handleAnswer()}>
            Ver respuesta
        </Button>
        <div id="container-answer" className='border rounded bg-violet p-2 w-100'>

        </div>
    </div>
  );
}

export default App;
