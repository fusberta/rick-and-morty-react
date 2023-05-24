import React, {useState, useEffect} from "react"
import Skeleton from "../../components/skeleton";
import NotFound from "../../components/not-found/not-found";
import { Link } from "react-router-dom";
import "./episodes.css"
import ModalEpisode from "../../components/modal-episode/modal-episode";

const Episodes = () => {

    const [id, setId] = useState(1);
    const [info, setInfo] = useState([]);
    const {air_date, name} = info || {};
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [episodes, setEpisodes] = useState([]);
    const [episodeCount, setEpisodeCount] = useState();

    const apiUrl = `https://rickandmortyapi.com/api/episode/${id}`;

    useEffect(() => {
        (async function () {
            try {
                setLoading(true)
                const data = await fetch(apiUrl).then((res) => res.json());
                setInfo(data);
                
                const characters = await Promise.all(
                    data.characters.map((link) => {
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
            const allEpisodes = []

            let episodes;

            for (let i = 1; i <= 3; i++) {
                episodes = await fetch('https://rickandmortyapi.com/api/episode?page=' + i)
                    .then((res) => res.json())
                episodes?.results.forEach(episode => allEpisodes.push(episode));
            }
            setEpisodeCount(episodes.info.count)
            setEpisodes(allEpisodes)
        })()
    }, [])

    const errorSearchText = 'По вашему запросу ничего не найдено'
    return (
        <div className="episodes-page">
            <div className="title-container">
                <h1 className="episode-name">
                    Эпизод: {' '}
                    <div className="episode-btn" onClick={() => {
                        setOpenModal(true)
                    }}>
                        {name === "" ? "Unknown" : name}
                    </div>
                    <ModalEpisode openModal={openModal} setOpenModal={setOpenModal} episodeCount={episodeCount} episodes={episodes} setId={setId} />
                </h1>
                <h5 className="episode-date">
                    Дата выхода:  {air_date === "" ? "Unknown" : air_date}
                </h5>
            </div>
            
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

export default Episodes;
