import { useEffect } from 'react';
import './RepoCards.css';
import RepoCard from '../RepoCard/RepoCard';
import { getAllRepos } from '../../API/DBRequest';
import { IData } from '../../App';



const RepoCards = (props:IData) => {


    // fetch data from Github API

    useEffect(() => {
        const fetchHRepoData = async () => {
            try {
              const { data } = await getAllRepos();
              props.setRepos(data);
            } catch (error) {
              console.log(error);
            }
          };
      
          fetchHRepoData();
    },[]);


    return (
        <div className='container'>
        {
                props.repos!=null && props.repos.map((repo) => { 
                    return (
                        <div className="wrapper2" key={repo.id}>
                            <RepoCard props={repo}/>
                        </div>
                        
                    )})
            }
        {
            props.repos.length === 0 && (
                <div className="wrapper2">
                    <p>No repos found</p>
                </div>
            )
        }
        </div>
    )
};

export default RepoCards;