import style from "./form.module.css";
import { useState } from 'react';


export default function Form() {

    
    const [inputs, setInputs] = useState({});
    const [textarea, setTextarea] = useState('');
    
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
      setTextarea(values => ({...values, [name]: value}))
    }
    return(
        <form id="form1" className={style.form} action="https://formsubmit.co/contato@nejpoa.com.br" target = "_blank"
          method="POST">

        <input className={style.inputNome}
        
          type="text" 
          name="firstname" 
          value={inputs.firstname || ""}
          placeholder= "    Nome" 
          required
          onChange={handleChange}
        />
      
       
          <input className={style.inputEmail}
            type="email" 
            name="email" 
            value={inputs.email || ""}
            placeholder="   Email"  
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
    )

}