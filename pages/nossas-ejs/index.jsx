import Image from "next/image";
import React, { useState } from "react";
import Header from "../../components/Header"
import Footer from "../../components/footer";
import styles from "./style.module.css"
import { handleJSONfiles } from "../../functions/jsonHandler";

export function getStaticProps() {
    const ejs = handleJSONfiles("./public/posts/ejs");
  
    return {
      props: { ejs },
    };
  }

export default function NossasEjs(props){
    const tags = ["Negócios","Tecnologia","Agrária","Saúde","Engenharia","Humanas"];
    const [searchTerm, setSearchTerm] = useState('');
    const ejsPath = "/posts/ejs";

    let { ejs } = props;

    const [activeTags, setActiveTags] = useState([]);

    function toggleTag(tag){
        if (!activeTags.includes(tag)){
            setActiveTags([...activeTags, tag])
        }else{
            setActiveTags(activeTags.filter((activeTag)=>{
                return activeTag !== tag
            }))
        }
    }

    return(
        <div style={{backgroundColor: '#efefef'}}>
            <div style={{padding: `0% 5% 1% 5%`, backgroundColor: 'white', height:'fit-content'}}>
                <Header home='0' end='/'/>
            </div>
            <div className={styles.pageContainer} style={{maxWidth: tags.length*200+(tags.length*12)}}>
                <div className={styles.searchBarContainer}>
                    <input type="text" className={styles.searchBar} placeholder="Digite aqui o nome da empresa..." onChange={event => {setSearchTerm(event.target.value)}}></input>
                    <span className={styles.searchBarIcon}></span>
                </div>
                <div className={styles.activeTagsContainer}>
                {
                    activeTags.map((activeTag, key)=>{
                        return(
                            <span key={key} className={styles.activeTag}>
                                {activeTag}
                                <buttton className={styles.removeTagButton} onClick={()=>toggleTag(activeTag)}>   x</buttton>
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
                                style={{backgroundColor: activeTags.includes(tag) ? '#852E2E' : '', fontWeight: activeTags.includes(tag) ? 'bold' : ''}} 
                                className={styles.tagButton}>
                                    {tag}
                                </button>
                            )
                        })
                    }
                </div>
                <div className={styles.ejsContainerUm}>
                    {
                        ejs.filter((ej)=>{
                            if(activeTags.includes(ej.tag)){
                                if(ej.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                                    return ej;
                                }
                            }else if(activeTags.length === 0){
                                if (searchTerm === ""){
                                    return ej;
                                }
                                else if(ej.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                                    return ej;
                                }
                            }
                        }).map((ej, key)=>{
                            return(
                                <a href={ej.websiteLink} key={key} className={styles.ej}>
                                    <img src={`${ejsPath + ej.url}`} className={styles.ejLogo} alt="Logo ej"></img>
                                    <br/>
                                </a>
                            ) 
                        })
                    }           
                </div>
            </div>
            <Footer instagram = "@nejpoa" email = "contato@nejpoa.com.br"/>
        </div>
    )
}