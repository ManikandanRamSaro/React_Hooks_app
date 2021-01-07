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
        const timerid= setTimeout(()=>{
            if(term){
                responseGet();
             }
         },500);
        
         return ()=>{  // it was the part of useEffect method, it will be called automatically 2 time when useEffect called and 1 function executed when called
            clearTimeout(timerid);
         };
    },[term]);

    const renderList = result.map((res)=>{
         return (
          
                    <div key={res.pageid} className="item">
                        <div className="right floated content">
                            <a href={`https://en.wikipedia.org?curid=${res.pageid}`} className="ui button">Go</a>
                        </div>
                       <div className="content">   
                            <div className="header">
                                {res.title}
                            </div> 
                            <span dangerouslySetInnerHTML={{__html:res.snippet}}></span>
                            {/* <p>above line is used to convert string into html element like any tag present inside the string that will be converted to tag</p> */}
                        </div>   
                </div>
           
         );
    });
   
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
        <div className="ui celled list">
            {renderList}
        </div>
    </div>);
}

export default Search;