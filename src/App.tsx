import './App.css';
import github from './assets/hithub.png';
import Search from './components/Search/Search';
import { FaStar } from "react-icons/fa";
import RepoCards from './components/RepoCards/RepoCards';
import { useEffect, useState } from 'react';
import { getReposGitApi } from './API/GitHubApiRequest';

export interface IRepo {
  id: string,
  name: string,
  url: string,
  avatar_url: string,
  description: string,
  stars: number,
  language: string,
}

function App() {
  const [repos, setRepos] = useState<IRepo[]>([]);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        await getReposGitApi();
      } catch (error) {
        console.log(error);
      }
    };

    fetchRepoData(); 
  }, [])

  return (
    <>
      <div>
        <div className='header'>
          <img src={github}
          alt="git"/>
          <h2 className='headerText'>Trending Repos</h2>
          <span>
            <FaStar style={{color:"#F9D949", width: "65px"}}/>
            <FaStar style={{color:"#F9D949", width: "65px"}}/>
            <FaStar style={{color:"#F9D949", width: "65px"}}/>
          </span>
        </div>
        
        <Search setRepos={setRepos}/>
        
        <RepoCards repos={repos} setRepos={setRepos} />
      </div>
    </>
  )
}

export default App;
