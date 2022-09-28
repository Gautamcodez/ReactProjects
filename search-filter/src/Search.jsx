import React, { useState } from "react";
import ImgApi from "./ImgApi";

const Search = () => {
    const [img, setImg] = useState(" ");

    const find = (event) => {
        const data = event.target.value;
        console.log(data);
        setImg(data);
    }

    return (
        <>
            <div className='searchbar'>
                <input type='text' placeholder='Search Anything' value={img} onChange={find} />
            </div>
            {img === " " ? null: <ImgApi item = {img} /> };
        </>
    )
}

export default Search;