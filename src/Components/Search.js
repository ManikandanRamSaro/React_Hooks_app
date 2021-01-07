import React,{useState,useEffect} from 'react';
import axios from 'axios';
const Search = () =>
{
    const [term,setTerm]= useState('');
    const [result,setResult]=useState([]);
        // this like component did mount event and its works in 3, 1 is without 2 param, 2 is [] empty array param, 3 is given below
  
    useEffect(()=>{ 
         
         const responseGet = async () => {
            const {data} =  await axios.get('https://en.wikipedia.org/w/api.php',{
                 params:{
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch:term,
                 },

             });
             setResult(data.query.search);
             console.log(data.query.search)
         }; 
         if(term){
            responseGet();
         }
    },[term]);

   
    return (<div>
        <div className="ui form">
            <div className="field">
                <label>Enter Search Term</label>
                <input type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="input"/>
            </div>
        </div>
    </div>);
}

export default Search;