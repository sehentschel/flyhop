// import './App.css';
// import FileDragDropCard from './components/FileDragDropCard';
// function App() {
//   return (
//     <div className="App">
//       <FileDragDropCard/>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Modal from './components/Modal';
import './css/modal.css'; // Import CSS file
import './App.css'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='App'>
      <h1>Single Page Web App</h1>
      <button onClick={openModal}>Open Modal</button>

      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default App;
