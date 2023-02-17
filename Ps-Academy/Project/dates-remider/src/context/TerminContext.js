import { createContext, useState ,useEffect} from "react";

const TerminContext = createContext();

export const TerminProvider = ({ children }) => {
    const [termin, setTermin] = useState(
        JSON.parse(localStorage.getItem("termin")) || []
    );

    useEffect(() => {
        localStorage.setItem("termin", JSON.stringify(termin));
    }, [termin]);

    // []
    // [1]
    // [1,5,6,8]
    const addTermin= (id) => {
        if (termin.find((item) => item === id)) {
            return; // oder wenn wir nur für favorite verwenden  schreiben wir die nexte:

            // const removeFav = favorite.filter((item)=> item !== id )

            // setFavorite(removeFav)
        }

        // else {

        setTermin([...termin, id]);
        //}
    };
    const removeTermin = (id) => {
        if (termin.find((item) => item === id)) {
            const removeTermin = termin.filter((item) => item !== id);

            setTermin(removeTermin);
        }
    };
    return (
        <TerminContext.Provider
            value={{
                termin: termin,
                addTermin,
                removeTermin,
            }}
        >
            {children}
        </TerminContext.Provider>
    );
};
export default TerminContext;
