import { useState } from "react";

const useModal = ()=>{
  const[modalStates, setModalStates] = useState({});

  const openModal = (modalId)=>{
    setModalStates((prevState)=>({
      ...prevState,
      [modalId]:true
    }))
  }

  const closeModal = (modalId)=>{
    setModalStates((prevState)=>({
      ...prevState,
      [modalId]: false
    }))
  }

  const isModalOpen = (modalId)=>{
    return !!modalStates[modalId];
  }  

  return {isModalOpen, openModal, closeModal};
}

export default useModal;