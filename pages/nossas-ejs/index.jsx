import Image from "next/image";
import React, { useState } from "react";
import Header from "../../components/Header"
import Footer from "../../components/footer";
import json from "../../public/posts/eventos/ejs.json"
import styles from "./style.module.css"

export default function alou(){
    const tags = Object.keys(json);
    const [searchTerm, setSearchTerm] = useState('');

    const tagNames = {
        negocios: "Negócios",
        tecnologia: "Tecnologia",
        agraria: "Agraria",
        saude: "Saúde",
        engenharia: "Engenharia",
        humanas: "Humanas",
    }

    const [activeTags, setActiveTags] = useState([]);
    const ejs = [];
    console.log(ejs)
    for (var tag in json){
        for (var ej in json[`${tag}`]){
            if (activeTags.length !== 0){
                if (activeTags.includes(tag)){
                    ejs.push(json[`${tag}`][`${ej}`])
                }
            }else{
                ejs.push(json[`${tag}`][`${ej}`])
            }
        }
    }

    function toggleTag(tag){
        if (!activeTags.includes(tag)){
            setActiveTags([...activeTags, tag])
        }else{
            setActiveTags(activeTags.filter((activeTag)=>{
                return activeTag !== tag
            }))
        }
    }

    console.log(searchTerm)
    let index = 0;
    return(
        <div style={{backgroundColor: '#efefef', height:'100vh'}}>
            <Header home='0'/>
            <div className={styles.pageContainer} style={{maxWidth: tags.length*150+(tags.length*8)}}>
                <div className={styles.searchBarContainer}>
                    <input type="text" className={styles.searchBar} placeholder="Digite aqui o nome da empresa..." onChange={event => {setSearchTerm(event.target.value)}}></input>
                    <span className={styles.searchBarIcon}></span>
                </div>
                <div className={styles.activeTagsContainer}>
                {
                    activeTags.map((activeTag, key)=>{
                        return(
                            <span key={key} className={styles.activeTag}>
                                {tagNames[activeTag]}
                                <buttton className={styles.removeTagButton} onClick={()=>toggleTag(activeTag)}>x</buttton>
                            </span>
                        )
                    })
                }
                </div>
                <div className={styles.tags}>
                    {
                        tags.map((tag, key)=>{
                            return(
                                <button 
                                onClick={()=>toggleTag(tag)} 
                                type="button" 
                                key={key} 
                                style={{backgroundColor: activeTags.includes(tag) ? '#852E2E' : ''}} 
                                className={styles.tagButton}>
                                    {tagNames[tag]}
                                </button>
                            )
                        })
                    }
                </div>
                <div className={styles.ejsContainerUm}>
                    {
                        ejs.filter((ej)=>{
                            if (searchTerm == ""){
                                return ej
                            }else if (ej.nome.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                                return ej;
                            }
                        }).map((ej, key)=>{
                            return(
                                <div key={key} className={styles.ej}>
                                    <img src={ej.url} className={styles.ejLogo} alt="Logo ej"></img>
                                    <br/>
                                </div>
                            ) 
                        })
                    }           
                </div>
            </div>
            <Footer instagram = "@nejpoa" email = "contato@nejpoa.com.br"/>
        </div>
    )
}