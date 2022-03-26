import React from 'react';
import Modal from 'react-modal';
import './Choose1Modal.css'

Modal.setAppElement('#root');
const Choose1Modal = (props) => {
  const { choose, chooseOne } = props
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const a = () => {
    chooseOne()
    openModal()
  }
  return (
    <div>
      <button onClick={a} className='choose-btn'>Top Pick</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='modal-container'
        contentLabel="Example Modal"
      >
        <div className='modal-info'>
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{choose[0]?.name.split(' ')[0]}</h2>
          <button onClick={closeModal} className='close-btn'>Close</button>
          <h3>Best For You</h3>
        </div>
        <img className='modal-img' src={choose[0]?.img} alt='' />
      </Modal>
    </div>
  );
};

export default Choose1Modal;