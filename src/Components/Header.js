import React from 'react';
import Link from './Link';

const Header = () =>{
        return (<div className="ui secondary pointing menu">
            <Link href="/" className="item">Accordion</Link>
            <Link href="/select" className="item">Dropdown</Link>
            <Link href="/transation" className="item">Transalation</Link>
            <Link href="/list" className="item">List</Link>
    </div>);
}
export default Header;