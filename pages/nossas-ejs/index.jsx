import Image from "next/image";
import React, { useState } from "react";
import Header from "../../components/Header"
import json from "../../public/posts/eventos/ejs.json"
import styles from "./style.module.css"

export default function alou(){
    const tags = Object.keys(json);

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

    console.log(activeTags)
    let index = 0;
    return(
        <div style={{backgroundColor: '#efefef', height:'100vh'}}>
            <Header />
            <div className={styles.pageContainer} style={{maxWidth: tags.length*150+(tags.length)}}>
                <div className={styles.searchBar}>Digite o nome da empresa  <span> ? </span></div>
                <div className={styles.activeTagsContainer}>
                {
                    activeTags.map((activeTag)=>{
                        return(
                            <span key={index++} className={styles.activeTag}>
                                {tagNames[activeTag]}
                                <buttton className={styles.removeTagButton} onClick={()=>toggleTag(activeTag)}>x</buttton>
                            </span>
                        )
                    })
                }
                </div>
                <div className={styles.tags}>
                    {
                        tags.map((tag)=>{
                            return(
                                <button 
                                onClick={()=>toggleTag(tag)} 
                                type="button" 
                                key={index++} 
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
                        ejs.map((ej)=>{
                            return(
                                <div key={index++} className={styles.ej}>
                                    <img src={ej.url} className={styles.ejLogo} alt="Logo ej"></img>
                                    <br/>
                                </div>
                            ) 
                        })
                    }           
                </div>
            </div>
        </div>
    )
}