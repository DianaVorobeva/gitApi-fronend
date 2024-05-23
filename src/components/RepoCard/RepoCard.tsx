import { IRepo } from '../RepoCards/RepoCards';
import './RepoCard.css';
import { FaStar } from "react-icons/fa";

const RepoCard= ({props}: {props:IRepo}) => {

    return (
      <div className="infoCard">
        <img 
        src={props.avatar_url} 
        alt="avatar"
        className="infoImg"
        />
        <h3 className='name'>{props.name}</h3>
        <p className='desc'>Description: {props.description}</p>
        <p className='lang'>Language: {props.language}</p>
        <a href={props.url} target='_blank' className='url'><p>Link: {props.url}</p></a>
        <p className='stars'>
          <span>
            <FaStar style={{color:"#F9D949", width: "65px"}}/>
            <FaStar style={{color:"#F9D949", width: "65px"}}/>
            <FaStar style={{color:"#F9D949", width: "65px"}}/>
          </span>
          {props.stars}
        </p>
      </div>
    )
}

export default RepoCard;
