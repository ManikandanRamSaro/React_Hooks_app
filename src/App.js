import React,{useState} from "react";
import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';
import Translate from './Components/Translate';
import Route from './Components/Route';
const items =[
    { id:1 , title:'React',content:'both html and logics are stored in js'},
    { id:2 , title:'Angular',content:'it had seperate Html, js and css file for all component'},
    { id:3 , title:'HTML',content:'its completly for UI only'}
]

const options = [
    {id:1,label:'The color red',value:'red'},
    {id:2,label:'The color green',value:'green'},
    {id:3,label:'The color blue',value:'blue'}
]

const App =()=>{

    const [selected,setSelected] = useState(options[0]);
        return (<div> 
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/transation">
                <Translate/>
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/select">
               <Dropdown label="Select a Color" selected={selected} onSelectedChange={setSelected} options={options}/>
            </Route>
 
           
            </div>);
 

}
export default App;