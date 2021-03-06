import React,{useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [{id:1,label:'Tamil',value:'ta'},{ id:2,label:'Arabic', value :'ar'},{ id:3,label:'Hindi', value :'hi'},{id:4, label:'African', value :'af'}]
const Translate = () =>{
    const [language,setLanguage]=useState(options[0])
    const [text,setText]=useState('');
    return(
        <div>
                <div className="ui form">
                    <div className="field">
                        <label>Your Text</label>
                        <input type="text" className="input" value={text} onChange={(e)=>{setText(e.target.value)}} />
                    </div>
                </div>
                <Dropdown label="Select a Language" selected={language} onSelectedChange={setLanguage} options={options} />
                <hr/>
                <h3 className="ui header">Output </h3>
                <Convert language={language} text={text} />
        </div>
    );
}
export default Translate;