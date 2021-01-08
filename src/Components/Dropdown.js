import React, { useState , useEffect,useRef } from 'react';

const Dropdown = ({options,selected,onSelectedChange}) =>{

    const [open,setOpen] =useState(false);
    const ref=useRef();

    useEffect(()=>{

        const onBodyClick = (event)=>{ 
            if(ref.current.contains(event.target))
            {
                return;
            }
            setOpen(false);
       };

        document.body.addEventListener('click',onBodyClick);

        return () =>{ // used to remove event when component detached from app component that time, this will executed and removed from body event
            document.body.removeEventListener('click',onBodyClick);
        }
    },[]);

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
    });


    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label"> Select a Value</label>
                <div 
                    onClick={()=>{setOpen(!open)}}
                    className={`ui selection dropdown ${ open ? 'visible active' : ''} `}
                    >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu  ${ open ? 'visible transition' : ''}`}>
                         {renderedOption}
                    </div>               
                </div>
            </div>            
        </div>
    );
};

export default Dropdown;