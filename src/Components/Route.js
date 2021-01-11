const Route = ({path,children}) =>{
    return window.location.pathname === path ? children : null;
}
export default Route;

//"children"  -> it return what are all the component or content present inside the tags of the Route component and they are called as Route