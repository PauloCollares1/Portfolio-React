import  jsonlist  from '../../dados.json';
import './ProjectsGrid.css'


export const ProjectsGrid = () => {

  return (
    <section className='section2'>
        <div className='projetos'>
            {jsonlist.map((item) => (
                <div className='card' key={item.id}>
                    <h3><b>Título:</b><br /> {item.titulo}</h3>
                    <br />
                    <span><b>Descrição:</b>
                    <br />
                    {item.descrição}</span>
                    <br />
                    <br />
                    <span><b>Tecnologias utilizadas:</b></span>
                    <br />
                    <span>{item.tecnologias}</span>
                    <br />
                    <br />
                    <a href='https://www.google.com'><button>Acessar aplicação</button></a>
                </div>
            ))}
        </div>
    </section>
  )
}


