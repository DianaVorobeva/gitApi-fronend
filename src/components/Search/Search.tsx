import { useState } from 'react';
import './Search.css';
import { getOneRepo } from '../../API/DBRequest';
import { IData } from '../../App';


const Search = (props:IData) => {
    const [search, setSearch] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            searchData();
        }
      };

    const searchData = async() => {
        if (search === "") {
          alert("Please type a name or ID to search");
        } else {
        const {data} = await getOneRepo(search);
        props.setRepos(data);
        setSearch("");
        }
      };

    return (
        <div className='searchContainer'>
            <input
            type="text"
            placeholder="Search by name or ID ..."
            value={search || ""}
            className="searchInput"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            />
            <button
            className='btn'
            onClick={searchData}
            >
                Search
            </button>
        </div>
    )
}

export default Search;