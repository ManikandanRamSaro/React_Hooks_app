import React from "react";
//import Accordion from './Components/Accordion';
import Search from './Components/Search';
const items =[
    { id:1 , title:'React',content:'both html and logics are stored in js'},
    { id:2 , title:'Angular',content:'it had seperate Html, js and css file for all component'},
    { id:3 , title:'HTML',content:'its completly for UI only'}
]

class App extends React.Component{

    render(){
        return (<div>
            <br/>
            {/* <Accordion items={items}/> */}
            <Search />
            </div>);
    }

}
export default App;