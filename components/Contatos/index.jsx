import React from "react";
import style from "./contato.module.css";
import Form from "./form";


export default function Contacts() {
  
  
    return ( 
      
    <div className={style.container}>
        <div className={style.contact_text}>
          <h1 className={style.h1}>Contato</h1>
          <h3 className={style.h3}><span>→</span>Se interessou em ser parceiro do NEJ POA? Quer entender melhor como uma Empresa Júnior pode resolver a dor da sua empresa? Ou quer criar uma EJ? Entre em contato que te responderemos em até 2 dias úteis.</h3>
      </div>

      <div className={style.contact_forms}>
        <Form/>
      </div>
      </div>
    )
  

}