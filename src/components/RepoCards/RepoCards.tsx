import { useEffect, useState } from 'react';
import './RepoCards.css';
import RepoCard from '../RepoCard/RepoCard';
import { getAllRepos } from '../../API/DBRequest';

export interface IRepo {
    id: string,
    name: string,
    url: string,
    avatar_url: string,
    description: string,
    stars: number,
    language: string,
}

const RepoCards = ({repos, setRepos}) => {


    // fetch data from Github API

    useEffect(() => {
        const fetchHRepoData = async () => {
            try {
              const { data } = await getAllRepos();
              setRepos(data);
            } catch (error) {
              console.log(error);
            }
          };
      
          fetchHRepoData();
    },[]);


    return (
        <div className='container'>
        {
                repos!=null && repos.map((repo) => { 
                    return (
                        <div className="wrapper2" key={repo.id}>
                            <RepoCard props={repo}/>
                        </div>
                        
                    )})
            }
        {
            repos.length === 0 && (
                <div className="wrapper2">
                    <p>No repos found</p>
                </div>
            )
        }
        </div>
    )
};

export default RepoCards;