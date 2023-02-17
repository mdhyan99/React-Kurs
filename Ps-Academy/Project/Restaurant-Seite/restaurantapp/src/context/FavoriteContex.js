import React, { createContext, useState, useEffect } from "react";
const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [favoritep, setFavoritep] = useState(
        JSON.parse(localStorage.getItem("favoritep")) || []
    );

    useEffect(() => {
        localStorage.setItem("favoritep", JSON.stringify(favoritep));
    }, [favoritep]);

    const [like, setLike] = useState(
        JSON.parse(localStorage.getItem("like")) || 0
    );

    useEffect(() => {
        localStorage.setItem("like", 0);
    }, [like]);

    const addFav = (id) => {
        if (favoritep.find((item) => item === id)) {
             // oder wenn wir nur für favorite verwenden  schreiben wir die nexte:

            const removeFav = favoritep.filter((item)=> item !== id )

            setFavoritep(removeFav)
        }

        else {

        setFavoritep([...favoritep, id]);
       }
   
    };
     const addLike = (id) => {
         if (favoritep.find((item) => item === id)) {

            setLike(like+1);

         }
     };
    return (
        <FavoriteContext.Provider
            value={{
                favoritep,
                setFavoritep,
                addFav,
                addLike,
                like
            }}
        >
            {children}
        </FavoriteContext.Provider>
    );
};
export default FavoriteContext;
