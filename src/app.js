// import { useState } from 'react';
import { useState } from 'react';
import './app.css';

const messages = ['We are in the step one, learner ', 'we are in the step two, executant ', 'we are in the step three, ninja '];

const App = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step <= 2) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step >= 2) {
      setStep(step - 1);
    }
  };

  return (

    <>
      <h1>Very Simple App to show useState() hook</h1>
      <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? 'number active' : 'number'}>1</div>
          <div className={step >= 2 ? 'number active' : 'number'}>2</div>
          <div className={step >= 3 ? 'number active' : 'number'}>3</div>
        </div>
        <div className="message">
          <h1>
            Message:&nbsp;
            {`${messages[step - 1]} ${step}`}
          </h1>
        </div>
        <div className="buttons">
          <button className="button active" onClick={handlePrevious}>Previous</button>
          <button className="button active" onClick={handleNext}>Next</button>
        </div>
      </div>
    </>

  );
};
export default App;

// const [isclose, setIsClose] = useState(false);
