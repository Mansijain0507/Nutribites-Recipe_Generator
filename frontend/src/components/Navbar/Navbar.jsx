
import './Navbar.css';
import logo from '../../assets/fast-food-svgrepo-com.svg'
import toogle_light from '../../assets/night.png'
import toogle_dark from '../../assets/brightness.png'



export const Navbar = ({ theme, setTheme, link }) => {

    const toogle_mode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <>
            <nav class="navbar">
                <div class="logo">
                    <img src={logo} alt="Logo" />
                    <h1>Nutribytes</h1>
                </div>
                {/* <div class="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div> */}
                {/* <div class="login">

                <img onClick={() => { toogle_mode() }} src={theme === 'light' ? toogle_light : toogle_dark} alt='logo' className='toogle-light-btn'></img> */}
                {/* <Link to="/login">Login</Link> */}
                {/* <i class="fa fa-bars" aria-hidden="true"></i> */}
                {/* </div> */}
            </nav>

        </>
    )
}