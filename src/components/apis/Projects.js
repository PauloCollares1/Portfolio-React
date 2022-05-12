import { useEffect, useState } from 'react'
import axios from 'axios';

const url_api = "http://localhost:5000/api";




export const Projects = () => {

    const [myprojects, setMyProjects] = useState();

    useEffect(() => {

        axios.get(url_api)
            .then((response) => {
                return setMyProjects(response.data);
            });
        }, []);
        console.log(typeof(myprojects))

    

    




  return (

      <div>{myprojects}</div>
  )
}
