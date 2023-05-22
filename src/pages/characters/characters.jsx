import { useState, useEffect, createContext } from "react";
import { Link } from "react-router-dom";
import './characters.css'
import axios from 'axios';
import Pagination from "../../components/pagination/pagination";
import Search from "../../components/search/search";
import Skeleton from "../../components/skeleton";
import NotFound from "../../components/not-found/not-found";

export const FilterContext = createContext();

const Characters = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState("");
    const [error, setError] = useState(null);
    const [status, updateStatus] = useState("");
    const [gender, updateGender] = useState("");
    const [species, updateSpecies] = useState("");

    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

    useEffect(() => {
        
        const getApiData = async () => {
            setLoading(true)
            await axios.get(apiUrl)
                .then(res => {
                    setData(res.data.results)
                    setTotalPages(res.data.info.pages)
                    setLoading(false)
                }) 
                .catch(err => setError(err.message))
        }

        getApiData()

    }, [apiUrl]);
    
    const errorSearchText = 'По вашему запросу ничего не найдено'
    return (
        <FilterContext.Provider value={{ status, updateStatus, updateGender, updateSpecies, currentPage, setCurrentPage }}>
            <div className="characters-page">
                <Search setSearch={setSearch} setCurrentPage={setCurrentPage} />
                <main className="showcase">
                    {!loading ? (
                        data?.map(item => {
                            return <article className="item" key={item.id}>
                                <Link to={`/characters/${item.id}`} className="img-case">
                                    <img src={item.image} className="img" />
                                </Link>
                                <div className="card">
                                    <div className="top">
                                        <Link to={`/characters/${item.id}`} className="name">
                                            {item.name}
                                        </Link>
                                        <span className="status">
                                            <img src={'../res/imgs/' + item.status + '-status.png'} className="status-icon" />
                                            <p className="status-text">{item.status}</p>
                                        </span>
                                    </div>
                                    <div className="middle">
                                        <span className="last-location">Последнее появление: </span>
                                        <a className="last-location-link">{item.location.name}</a>
                                    </div>
                                    <div className="bottom">
                                        <span className="first-location">Происхождение: </span>
                                        <a className="first-location-link">{item.origin.name}</a>
                                    </div>
                                </div>
                            </article>
                        })) : (!error) ?
                        ([...new Array(20)].map((_, index) => <Skeleton key={index} />)) : <NotFound text={errorSearchText} />
                    }
                </main>
                <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
            </div>
        </FilterContext.Provider>
    )
};

export default Characters;
