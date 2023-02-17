## filter search Input

```js
// in app.js
const [itemsData, setItemsData] = useState(items);

const filterbySearch = (word) => {
    if (word !== "") {
        const newArr = items.filter((el) =>
            el.title.toLowerCase().includes(word.toLowerCase())
        );
        setItemsData(newArr);
    }
};

<NavBar filterbySearch={filterbySearch} />;
// wir exportieren  filterbySearch   zu NavBar.js
```

```js
//in NavBar.js

const NavBar = ({filterbySearch}) => 
// wir importieren   filterbySearch  from App.js

const [searchValue, setSearchValue] = useState("");


 const onSearch = () =>{
    //   e.preventdefault()
      filterbySearch(searchValue)
     setSearchValue('') // die löcht was in input schreibt nach dem search
 }


         <FormControl
          type="text"
          placeholder="Search"
          className="mx-2"
           onChange={(e)=>setSearchValue(e.target.value)}
          value={searchValue}
          />

       <button onClick={()=>onSearch()}  className="btn-search">Search</button>

```

## filter Caterogy

```js
// in App.js 
import { items } from "./data";
const [itemsData, setItemsData] = useState(items);

 const filterbyCategory = (cat) => {
        if (cat === "all-menu")  // hier weil in data.js gibt kein caterogy all-menu 
         {
            setItemsData(items);
            // hier wenn wie cat === all-menu dan return alle daten 
            } else 
         {
            const newArr = items.filter((item) => item.category === cat);
            setItemsData(newArr);
            // oder return nur die category was wir wälen in Catagory.js
        }
    };


         <Catagory filterbyCategory={filterbyCategory} />
         // wir exportieren  filterbyCategory   zu Catagroy.js 
```
```js
// in Catagroy.js 
const Catagory = ({filterbyCategory}) => 
// wir importieren   filterbyCategory from App.js

 <button onClick={()=>filterbyCategory(cat)} style={{border:"1px solid #b45b35"}} className='btn1 mx-2'>{cat}</button>
 // hier zeigt  alle cat  als button       von data.js

```