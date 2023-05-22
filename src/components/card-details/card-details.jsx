import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import axios from 'axios';
import './card-details.css';

const CardDetails = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const { name, image, location, origin, gender, species, status, type } = data ?? {};

  const apiUrl = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {

    const getApiData = async () => {
      await axios.get(apiUrl)
        .then(res => setData(res.data))
        .catch(err => setError(err.message))
    }

    getApiData()
  }, [apiUrl]);

  return (
    <main className="card-details">
      
      {/* Background */}
      <div className="circle top-left"></div>
      <div className="circle top-right"></div>
      <div className="circle bottom-left"></div>
      <div className="circle bottom-right"></div>

      <div className="details-container">
        <h1 className="character-name">{name}</h1>
        <img src={image} />
        <div className={`status-${status}`}>
          {status}
        </div>
        <div className="details-content">
          <div className="gender-container">
            <span className="content-label">Пол:</span>
            {' ' + gender}
          </div>
          <div className="species-container">
            <span className="content-label">Вид:</span>
            {' ' + species}
          </div>
          <div className="type-container">
            <span className="content-label">Тип:</span>
            {' ' + (type === " ") ? ' Unknown' : type}
          </div>
          <div className="location-container">
            <span className="content-label">Последняя локация:</span>
            {' ' + location?.name}
          </div>
          <div className="origin-container">
            <span className="content-label">Происхождение:</span>
            {' ' + origin?.name}
          </div>
        </div>
      </div>
    </main>
  )
};

export default CardDetails;
