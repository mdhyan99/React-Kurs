import Navi from "./component/Navi.js";
import CardDetalis from "./component/CardDetalis.js";
import NotFound from "./component/NotFound.js";
import Forms from "./component/Forms.js";
function App() {
  const data = [
   {title:"title1",descripion :"discrpion 1" , img:"logo.jpg"},
   {title:"title3",descripion :"discrpion 3" , img:"logo192.png"},
   {title:"title2",descripion :"discrpion 2" , img:"logo.jpg"},
   {title:"title3",descripion :"discrpion 3" , img:"logo192.png"},


  ]
  // const cardTitle1 = "title1"
  // const cardTitle2 = "title2"
  // const cardTitle3 = "title3"
  // const cardTitle4 = "title4"

  const printTitle = () =>{
  alert(`this from app file `);
  }
  const onChangeHandler= (e) =>{
    console.log(e.target.value);
  }
    return (
    <div className="App">
      <Forms />
      <Navi />
      <button onClick={printTitle} className="btn btn-infop-2 m-2 " >Cilck</button>
      <input className="p-2 m-2" onChange={onChangeHandler} />
      {
       data.length ? (
        data.map((item,index) =>{
          return(
            <CardDetalis key={index} title ={item.title} descripion={item.descripion} img={item.img} clickMe={printTitle} />
                        
          )
        })
       ):(<NotFound message="No Data Cards Found" color = "danger"/>)

      }

      {/* <CardDetalis title ={data[0].title} descripion={data[0].descripion}/>
      <CardDetalis title ={data[1].title} descripion={data[1].descripion}/>
      <CardDetalis title ={data[2].title} descripion={data[2].descripion}/>
      <CardDetalis title ={data[3].title} descripion={data[3].descripion}/> */}
      
      {/* <CardDetalis title ={cardTitle1} />
      <CardDetalis title ={cardTitle2} />
      <CardDetalis title ={cardTitle3} />
      <CardDetalis title ={cardTitle4} /> */}
      
    </div>
    );
}

export default App;
