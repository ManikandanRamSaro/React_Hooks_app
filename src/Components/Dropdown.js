import React from 'react';

const Dropdown = ({options,selected,onSelectedChange}) =>{
    const renderedOption = options.map((opt)=>{
        if(opt.value===selected.value){
            return null;
        }
        return (<div 
            key={opt.id} 
            className="item"
            onClick={()=>{onSelectedChange(opt)}}
            >
                {opt.label}
            </div>);
    })
    return (
        <div className="ui form">
            <div className="field">
                <label className="label"> Select a Value</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className="menu visible transition">
                         {renderedOption}
                    </div>               
                </div>
            </div>            
        </div>
    );
};

export default Dropdown;