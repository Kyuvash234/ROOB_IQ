import React from 'react';
import logoStartPage from './images/logoStartPage.png'
import './styles/reset.css'
import './styles/first_page.css'

function App() {

  return (
    <div className="App">
      <div>
          <img className='start_img' src={logoStartPage} alt="Photo"/>
      </div>
        <h1 className='ROOB'>ROOB<span className='IQ'>IQ</span></h1>
        <p className='Hello_msg'>Конструктор презентаций с расчетом экономических показателей.</p>
        <button className="start_btn">Начать</button>
    </div>
  );
}

export default App;
