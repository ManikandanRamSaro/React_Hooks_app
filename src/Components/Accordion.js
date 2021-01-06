import React,{useState} from 'react';

const Accordion = ({items}) =>{

    const [selectedIndex,setSelectedIndex]=useState(null);

    const onTitleClick = (index) =>{
        setSelectedIndex(index);
    }
    const itemRender = items.map((item,index)=>{
        const active = index === selectedIndex ? 'active':'';
        return (
            <React.Fragment key={item.id}>
                <div 
                     className={`title ${active}`}
                     onClick={()=>onTitleClick(index)}
                    >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    })

    return (<div className="ui styled accordion">
             {itemRender}          
            </div>);
}
export default Accordion;