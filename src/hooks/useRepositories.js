import axios from "axios";
import { useEffect,useState } from "react"

const useRepositories = ()=>{
    const [repositories,setRepositories] = useState(null)
    //const baseUrl = 'http://localhost:5000/api/repositories';
   const baseUrl = 'http://10.11.10.97:5000/api/repositories';

    const fetchRepositories = async () =>{
        axios({
            method: 'get',
            url: `${baseUrl}`,
          }).then((response) => {
            setRepositories(response.data)
          });
    }
    useEffect(()=>{
        fetchRepositories()
    },[])
    const repositoriesNodes = repositories ? repositories.edges.map(edge =>edge.node):[]

    return {repositories:repositoriesNodes}
}

export default useRepositories