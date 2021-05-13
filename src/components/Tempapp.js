import React, { useEffect, useState } from 'react'
import './css/style.css'

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Jamnagar");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=602f1527d3c5eb188aa4016779f8ade7`;
            const responce = await fetch(url);
            const resJson = await responce.json();
            console.log(resJson);
            setCity(resJson.main);
        }

        fetchApi();
    }, [search])

    return (
        <>

            <div className="box">
                <div className="inputData">
                    <input type="search" value={search} className="inputField" placeholder="Enter Place"
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                </div>

                {
                    !city ? (
                        <p className="errorMsg"> No Data Found</p>
                    ) : (
                        <>
                            <div className="info">
                                <h2 className="location">
                                    <i className="fas fa-street-view"></i>{search}
                                </h2>
                                <h1 className="temp">
                                    {city.temp}°Cel
                                </h1>
                                <h3 className="tempmin_max">Min : {city.temp_min}°Cel | MAX : {city.temp_max}°Cel </h3>

                                <div className="wave -one"></div>
                                <div className="wave -two"></div>
                                <div className="wave -three"></div>
                            </div>
                        </>

                    )
                }

            </div>

        </>
    )
}

export default Tempapp