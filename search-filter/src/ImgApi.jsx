import React from "react";

const ImgApi = (props) =>{

    const apiKey = 'ckvvaqm5PqKKKolqb2Fnz9qXzpRlUhoEV2JTnVWRFKc';
    const Api = `https://source.unsplash.com/400x300/?${props.item}`;

    return(
        <>
            <div className="img-container">
                <img src={Api} alt = "Search" /> 
            </div>
        </>
    )
}

export default ImgApi;