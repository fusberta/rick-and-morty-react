import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import Skeleton from "../../components/skeleton";
import NotFound from "../../components/not-found/not-found";
import './locations.css'
import ModalEpisode from "../../components/modal-episode/modal-episode";

const Locations = () => {
    const [id, setId] = useState(1);
    const [info, setInfo] = useState([]);
    const {name, type, dimension} = info || {};
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [locations, setLocations] = useState([]);
    const [locationsCount, setLocationsCount] = useState();

    const apiUrl = `https://rickandmortyapi.com/api/location/${id}`;

    useEffect(() => {
        (async function () {
            try {
                setLoading(true)
                const data = await fetch(apiUrl).then((res) => res.json());
                setInfo(data);
                
                const characters = await Promise.all(
                    data.residents.map((link) => {
                        return fetch(link).then((res) => res.json());
                    })
                );
                setData(characters);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        })()
    }, [apiUrl]);

    useEffect(() => {
        (async function () {
            const allLocations = []

            let locations;

            for (let i = 1; i <= 7; i++) {
                locations = await fetch('https://rickandmortyapi.com/api/location?page=' + i)
                    .then((res) => res.json())
                locations?.results.forEach(location => allLocations.push(location));
            }
            setLocationsCount(locations.info.count)
            setLocations(allLocations)
        })()
    }, [])

    const errorSearchText = 'По вашему запросу ничего не найдено'
    return (
        <div className="episodes-page">
            <div className="title-container">
                <h1 className="episode-name">
                    Локация: {' '}
                    <div className="episode-btn" onClick={() => {
                        setOpenModal(true)
                    }}>
                        {name === "" ? "Unknown" : name}
                    </div>
                    
                </h1>
                <h5 className="episode-date">
                    Измерение - {dimension === "" ? "Unknown" : dimension}
                </h5>
                <h5 className="location-type">
                    Тип - {type === "" ? "Unknown" : type}
                </h5>
            </div>
            <ModalEpisode openModal={openModal} setOpenModal={setOpenModal} episodeCount={locationsCount} episodes={locations} setId={setId} />
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
        </div>
    )
};

export default Locations;
