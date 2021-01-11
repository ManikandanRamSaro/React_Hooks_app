import React from 'react';
 const Link = ({href,className,children}) =>{
     const clickhandler = (event) =>{

        if(event.mataKey || event.ctrlKey)
        {
            return;
        }
        event.preventDefault();

        window.history.pushState({},'',href);

        const popState = new PopStateEvent('popstate');
        window.dispatchEvent(popState);
     }
    return (<a onClick={clickhandler} href={href} className={className} >{children}</a>);
 }

 export default Link;