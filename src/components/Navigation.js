import { Link } from "react-router-dom";
export default function Navigation(){
    const nav = ["about", "portfolio", "blog", "contact"];
    return(
        <nav>
            <div className="col leftDecor"></div>
            <ul>
                {nav.map(function(item) {
                   return <li><Link to={`${item}`}>{item}</Link></li>;
                })}
            </ul>
            <div className="col rightDecor"></div>
        </nav>
    )
}