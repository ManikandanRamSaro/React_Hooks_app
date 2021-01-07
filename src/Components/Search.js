import React,{useState,useEffect} from 'react';

const Search = () =>
{
    const [term,setTerm]= useState('');
    
    useEffect(()=>{  // this like component did mount event and its works in 3, 1 is without 2 param, 2 is [] empty array param, 3 is given below
        console.log('term get changed')
    },[term])

   
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