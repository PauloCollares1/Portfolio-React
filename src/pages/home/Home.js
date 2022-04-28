import React from 'react'
//-----------------------//
import './Home.css'
import perfil from '../home/foto.jpeg';
import arrowGif from '../home/downArrowGif.gif';
import { ProjectsGrid } from '../projects/ProjectsGrid';





export const Home = () => {
  return (
     <section className='section1'>
        <img src={perfil} alt='Foto do perfil de quem criou'></img>
        <h1>Quem sou eu?</h1>
        <p>&rarr; Meu nome é Paulo e esse aqui é meu portfólio !<br />
           &rarr; Minhas bases são formadas em HTML CSS e o bom e velho Javascript.<br />
           &rarr; Para me profissionalizar ainda mais estou desenvolvendo as Stacks de Node-js e React-js.<br />
           &rarr; Esse site por exemplo, ele foi construído em React.<br />
           &rarr;Atualiemnte procuro uma oportunidade nessa área e se você puder me ajudar, eu agradeço!<br />
           &rarr;Também gosto de jogar volei de praia e assistir muuuuuitos filmes.<br />
           &rarr;Aos finais de semana eu gosto de tomar cerveja e conhecer novos lugares.<br />
         </p>
         <h1>Veja abaixo alguns dos meus projetos</h1>
         <img src={arrowGif} alt="Seta indicando para desce mais a página" />
         <ProjectsGrid />
     </section>
  )
}
