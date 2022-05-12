import './ProjectsGrid.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const url_api = "https://api-de-projetos-do-portfolio-p.herokuapp.com/apidaaplicacaodeportfolio11223344";


export const ProjectsGrid = () => {

  const [myprojects, setMyProjects] = useState([]);

  useEffect(() => {
    axios.get(url_api)
      .then((response) => {
        return setMyProjects(response.data);
      });
  }, []);
   
  return (
    <section className='section2'>
        <div className='projetos'>
            {myprojects.map((item) => (
                <div className='card' key={item._id}>

                    <h3><b>Título:</b>
                    <br />
                    {item.db_title}</h3>
                    <br />
                    
                      <b>Descrição:</b>
                      <br />
                      {item.db_description}
          
                    <br />
                    <br />

                      <span>
                        <b>Tecnologias utilizadas:</b>
                      </span>
                    {item.db_technology}
                    
                    <a href={item.db_url}><button><b>Acessar aplicação</b></button></a>
                </div>
            ))}
        </div>
    </section>
  )
}


