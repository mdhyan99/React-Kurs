import React, { useState,useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import image from "../image/p1.webp";
import Sound  from './bird-alarm.mp3'
import TerminContext from "../context/TerminContext";
import person from '../data.json'
import Form from "./Form";
const song = new Audio(Sound)
// import DatesList from "./DatesList";
const Termin = ({ entfernVonList}) => {
    const { termin,removeTermin,addTermin}= useContext(TerminContext)
    console.log(termin);


    const termin1= person.filter((item)=> termin.includes(item.id)  )

//     const navigate = useNavigate(); //  und     navigate("/"); // zu Starseite navigieren 


//     const { id } = useParams(); 
//     // const termin1 = person.find((i) => i.termin === termin);

//    const entfernStartseite = () => {
//         entfernVonList(termin1.id);
//         navigate("/"); // zu Starseite navigieren 
//     };

    return (
        <Container>
           
            {
                termin1.map((item)=>( 

                    <Row key={item.id}>
                    <Col>
                        <div className="text-center ">
                            <img className="img-avatar " src={image} alt="person" />
                        </div>
                        <div className="px-3 text-center">
                            <p className=" ">
                                <span>Termin mit: </span>
                                <br /> {item.name}
                            </p>
                            <p className=" ">
                                <span>Datum: </span> <br />
                                {item.date}
                            </p>
                            <p>
                                {" "}
                                <span>Termin Beschreibung: </span>
                                <br />
                                {item.beschreibung}
                            </p>
                   <div className=" d-flex justify-content-between">
                   <Link to={"/"}>
                        <button className=" btn-style p-2 ">Starseite</button>
                    </Link>
                    <button onClick={()=>song.play()}>Play</button>
                    <button onClick={()=>song.pause()}>Stop</button>
                            <button
                        onClick={()=>removeTermin(item.id)}
                        className="btn-style p-2 "
                    >
                        Löchen
                    </button>
                   </div>
                        </div>
                    </Col>
                </Row>
                   )
                   )
            }
            <Row>
                <Col className=" d-flex justify-content-between">
               
                   
                    {/* <button onClick={()=>song.volume=0}>-</bu
tton>
                    <button onClick={()=>song.volume=1}>+</button> */}
                  
                </Col>
            </Row>
            
        </Container>
    );
};

export default Termin;
