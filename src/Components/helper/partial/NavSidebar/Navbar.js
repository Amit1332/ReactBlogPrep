import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    return (
        <div className="navbar">
            <div className={`box1 ${location.pathname === '/' ? 'active-tab' : ''}`}>
                <NavLink to='/' activeClassName="active-link">Home</NavLink>
            </div>

            <div className={`box1 ${location.pathname === '/bollywood' ? 'active-tab' : ''}`}>
                <NavLink to='/bollywood'>Bollywood</NavLink>
            </div>

            <div className={`box1 ${location.pathname === '/hollywood' ? 'active-tab' : ''}`}>
                <NavLink to='/hollywood'>Hollywood</NavLink>
            </div>

            <div className={`box1 ${location.pathname === '/technology' ? 'active-tab' : ''}`}>
                <NavLink to='/technology'>Technology</NavLink>
            </div>

            <div className={`box1 ${location.pathname === '/fitness' ? 'active-tab' : ''}`}>
                <NavLink to='/fitness'>Fitness</NavLink>
            </div>

            <div className={`box1 ${location.pathname === '/food' ? 'active-tab' : ''}`}>
                <NavLink to='/food'>Food</NavLink>
            </div>
        </div>
    );
}

export default Navbar;
