import React, { useEffect, useState } from "react";

const Tempapp = () => {

    const [city, setcity] = useState(null);
    const [search, setSearch] = useState("pune");

    useEffect(() => {
        const fetchApi = async ()=> {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=4cb2b1453a4d3b6ddca5ee08dc42d51d`;
            const response =  await fetch(apiUrl);
            const resJson = await response.json();
            console.log(response)
            setcity(resJson.main);

        }
        fetchApi();
    },[setSearch])

    const type = (event) =>{
        setSearch(event.target.value);
    }
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputFeild" onChange={type} />
                </div>

                {!city ? (<p>No data found</p>)  : (
                    <div className="info">
                    <h2 className="location">
                        <i className="fas fa-street-view"></i>{search}
                    </h2>
                    <h1 className="temp">
                       {city.temp}
                    </h1>
                </div>
                )              
                }

                <div className="wave-one"></div>
                <div className="wave-two"></div>
                <div className="wave-three"></div>
            </div>


        </>
    )
}

export default Tempapp;