import React from 'react';

const Dropdown = ({options}) =>{
    const renderedOption = options.map((opt)=>{
        return (<div key={opt.id} className="item">{opt.label}</div>);
    })
    return (
        <div className="ui form">
            <div className="field">
                <label className="label"> Select a Value</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">Select color</div>
                    <div className="menu visible transition">
                         {renderedOption}
                    </div>               
                </div>
            </div>            
        </div>
    );
};

export default Dropdown;