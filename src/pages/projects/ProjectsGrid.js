import  jsonlist  from '../../dados.json';
import './ProjectsGrid.css';


export const ProjectsGrid = () => {

  return (
    <section className='section2'>
        <div className='projetos'>
            {jsonlist.map((item) => (
                <div className='card' key={item.id}>

                    <h3><b>Título:</b>
                    <br />
                    {item.titulo}</h3>
                    <br />
                    
                      <b>Descrição:</b>
                      <br />
                      {item.descrição}
          
                    <br />
                    <br />

                      <span>
                        <b>Tecnologias utilizadas:</b>
                      </span>
                    {item.tecnologias}
                    
                    <a href={item.url}><button><b>Acessar aplicação</b></button></a>
                </div>
            ))}
        </div>
    </section>
  )
}


