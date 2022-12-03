import React from "react";
import style from "./contato.module.css";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import Modal from 'react-modal';
// import emailjs from '@emailjs/browser';




const customStyles = {
  content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
  }};

export default function Contacts() {
  
  

    // const form = useRef();

    // const [modalIsOpen,setIsOpen] = React.useState(false);
    // function openModal() {
    //     setIsOpen(true);
    // }
    // var subtitle;

    // function afterOpenModal() {
    // // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#3f7f92';
    // }
    
    // function closeModal(){
    //     setIsOpen(false);
    // }

    const [inputs, setInputs] = useState({});
    const [textarea, setTextarea] = useState('');
    
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
      setTextarea(values => ({...values, [name]: value}))
    }
  
    // const handleSubmit = (event) => {
      
    //   // event.preventDefault();

    // alert("Email enviado");
    // }
  
    return ( 
      
    <div className={style.container}>
        <div className={style.contact_text}>
          <h1 className={style.h1}>Contato</h1>
          {/* <image src="arrow-right.svg" alt="" className="imgArrow"/> */}
          <h3 className={style.h3}><span>→</span>Se interessou em ser parceiro do NEJ POA? Quer entender melhor como uma Empresa Júnior pode resolver a dor da sua empresa? Ou quer criar uma EJ? Entre em contato que te responderemos em até 2 dias úteis.</h3>
      </div>
      
    
   
      <div className={style.contact_forms}>
      <form id="form1" className={style.form} action="https://formsubmit.co/contato@nejpoa.com.br" target = "_blank"
          method="POST">
      
        <input className={style.input}
          type="text" 
          name="firstname" 
          value={inputs.firstname || ""}
          placeholder="  Nome" 
          required
          onChange={handleChange}
        />
        
       
          <input className={style.input}
            type="email" 
            name="email" 
            value={inputs.email || ""}
            placeholder="✉ Email"  
            required
            onChange={handleChange}
          />

          <input className={style.assunto}
            type="text" 
            name="assunto" 
            id="assunto"
            value={inputs.assunto || ""}
            style={
              {
                fontWeight: "bold"
              }
            }
            placeholder="Assunto"  
            required
            onChange={handleChange}
          />
         <textarea className={style.textareas}
        
          name="mensagem"
          rows="5"
          cols="20"
          maxLength="500"
      
          value={inputs.mensagem || ""}
          placeholder="Mensagem"
    
          required
          onChange={handleChange}
           />

          <input className={style.btn_submit}
           type="submit"
           placeholder="Enviar"
           
           
           
            />
      </form>
      </div>
      </div>
    )
  
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Contacts />);
}