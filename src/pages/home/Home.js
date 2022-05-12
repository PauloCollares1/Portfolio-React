import React from 'react';
import { useState, useEffect } from 'react';
//------------------------------------------------------//
import { ProjectsGrid } from '../projects/ProjectsGrid';
import github_image from '../home/imgs/github-icon.png';
import arrowDown from '../home/imgs/downArrowGif.gif';
import react_image from '../home/imgs/react-icon.png';
import mongo_image from '../home/imgs/mongo-icon.png';
import html_image from '../home/imgs/html5-icon.png';
import node_image from '../home/imgs/node-icon.png';
import css_image from '../home/imgs/css-icon.png';
import git_image from '../home/imgs/git-icon.png';
import js_image from '../home/imgs/js-icon.png';
import Typical from 'react-typical'; // Hook externo que faz o efeito de digitação
import axios from 'axios';
import './Home.css';

const url_perfil_picture = "https://api.github.com/users/paulocollares1";

export const Home = () => {

   const [self, setSelf] = useState();

   useEffect(() => {

      axios.get(url_perfil_picture)
          .then((response) => {
               return (setSelf(response.data.avatar_url));
          });
      }, []);  

   const scrollTop = function() {
      window.scrollTo(0, 0);
   };

  return (
     <section className='section1'>
        <h1>Portfólio</h1>
        <img src={self} alt='Foto do perfil de quem criou o site'></img>
        <span>
           <h3>Quem sou eu? &nbsp;</h3>
           <Typical loop={Infinity} wrapper="h3" steps={['Desenvolvedor', 3000, 'Amigo', 3000, 'TI', 3000, 'Cafezeiro', 3000, 'Geek', 3000, 'Muito bom com trabalho em equipe', 3000, 'Resolvedor de problemas',3000]}></Typical>
        </span>
        
        <p>&rarr; Oiiiii, Tudo beleza por aí ? Meu nome é Paulo e eu sou um desenvolvedor!<br />
           &rarr; Minhas bases são formadas em Javascript.<br />
           &rarr; Estou atualmente estudando e programando nas Stack's de Node-js e React-js.<br />
           &rarr; Esse site, por exemplo, foi todo construído em React.<br />
           &rarr; Aos finais de semana, eu gosto de tomar cervejas diferentes 🍺🍺 e Estudar sobre programação 📚📚.<br />
         </p>

         <h1>Tenho familiaridade com as seguintes Stack's</h1> 

         <div className='stacks_logo'>
            <img src={html_image} alt="Foto de uma seta apontando para baixo"/>
            <img src={css_image} alt="Foto de uma seta apontando para baixo"/>
            <img src={js_image} alt="Foto de uma seta apontando para baixo"/>
            <img src={react_image} alt="Foto de uma seta apontando para baixo"/>
            <img src={node_image} alt="Foto de uma seta apontando para baixo"/>
            <img src={mongo_image} alt="Foto de uma seta apontando para baixo"/>
            <img src={git_image} alt="Foto de uma seta apontando para baixo"/>
            <img src={github_image} alt="Foto de uma seta apontando para baixo"/>
         </div>
         
         <h1>Veja abaixo alguns dos meus projetos</h1>
         <img src={arrowDown}  alt="Foto de uma seta apontando para baixo"/>
         <ProjectsGrid />
         <h3>Para me contactar, basta falar comigo em uma das redes sociais no topo da tela</h3>
         <button onClick={scrollTop}><b>Voltar ao topo</b></button>
     </section>
  )
}
