import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import image from "../image/p1.webp";
import { Col, Row } from "react-bootstrap";
import DatesAction from "./DatesAction";
import TerminContext from "../context/TerminContext";

const DatesList = ({id,
    person,
    entfernVonList,
    onDelete,
    onViewData,
    setPersonData,
}) => {
    const { termin,removeTermin,addTermin}= useContext(TerminContext)
console.log(termin);
    // const { id } = useParams();
    // const product = person.find((i) => i.id === +id);
    const nameChange = (e, i) => {
        const abDatesPerson = [...person];
        abDatesPerson[i] = { ...person[i], name: e.target.value };
        setPersonData(abDatesPerson);
    };
    const dateChange = (e, i) => {
        const abDatesPerson = [...person];
        abDatesPerson[i] = { ...person[i], date: e.target.value };
        setPersonData(abDatesPerson);
    };
    const beschreibungChange = (e, i) => {
        const abDatesPerson = [...person];
        abDatesPerson[i] = { ...person[i], beschreibung: e.target.value };
        setPersonData(abDatesPerson);
    };


    const  addForm = (e, i) => {
        const abDatesForm = [...person];
        abDatesForm[i] = { ...person[i], beschreibung: e.target.value ,date: e.target.value ,name: e.target.value };
        setPersonData(abDatesForm);
    };

    console.log(person);
    return (
        <Row className="justify-content-center">
            <Col sm="12" className="">
                <div className="rectangle p-2 ">
                    {person.length ? (
                        person.map((item, index) => {
                            return (
                                // <div key={Math.random()} className="d-flex wenn kein id

                                <div
                                    key={item.id}
                                    className="  border-bottom mx-3 my-2   "
                                >
                                    <div className="avatar">
                                        <img
                                            className="img-avatar"
                                            src={image}
                                            alt="person"
                                        />
                                    </div>
                                    <form>
                                        <label>
                                            {" "}
                                            <span>Termin Mit :</span>{" "}
                                        </label>
                                        <br />
                                        <input
                                            className="inpt"
                                            value={item.name}
                                            onChange={(e) =>
                                                nameChange(e, index)
                                            }
                                            type="text"
                                            placeholder=" Name"
                                            width="120px"
                                        />
                                        <br />
                                        <label>
                                            <span>Termin-Datum :</span>{" "}
                                        </label>{" "}
                                        <br />
                                        <input
                                         
                                            className="inpt"
                                            value={item.date}
                                            onChange={(e) =>
                                                dateChange(e, index)
                                            }
                                            type="text"
                                            placeholder=" Datum"
                                        />
                                        <label>
                                            <span>Termin Beschreibung :</span>{" "}
                                        </label>{" "}
                                  +      <br />
                                        <textarea
                                            className="inpt"
                                            rows="2"
                                            cols="0"
                                            value={item.beschreibug}
                                            onChange={(e) =>
                                                beschreibungChange(e, index)
                                            }
                                            placeholder=" Drück auf zeigen dann siehe die Beschreibung  "
                                        ></textarea>

                                        
                                          
                                       
                                    </form>
                                    <br />

                                    {/* style={{
                              display: ( (<Link to={"/termin/" + item.id}>
                                             <button className="btn btn-primary ">
                                                 zeigen
                                             </button>
                                         </Link>))?"none" : "block",
                          }} */}

                                    <div className="d-flex justify-content-between">
                                        <Link to={"/termin/" + item.id}>
                                            <button  className="btn btn-primary  my-3">
                                                zeigen
                                            </button>
                                        </Link>
                                        <button
                                           onClick={(e) =>addForm(e,index)
                                              
                                            }
                                            className="btn btn-primary my-3 "
                                        >
                                            Hinzufügen
                                        </button>
                                        <button onClick={()=>addTermin(item.id)} className="btn btn-primary my-3 ">
                                                add
                                            </button>
                                     
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <h2 className="p-5 text-center">
                            🤭 Es gibt keine Termine 🤭{" "}
                        </h2>
                    )}
                    <DatesAction onDelete={onDelete} onViewData={onViewData} />
                </div>
            </Col>
        </Row>
    );
};

export default DatesList;
