import React,{createContext,useState} from 'react';

export const ModalContext = createContext();

const ModalProvider = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    return (
        <ModalContext.Provider value={{modalIsOpen,setModalIsOpen}}>
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;