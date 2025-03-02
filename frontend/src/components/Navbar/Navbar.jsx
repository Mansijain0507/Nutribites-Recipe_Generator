
import './Navbar.css';
import logo from '../../assets/fast-food-svgrepo-com.svg'

export const Navbar = () => {


    return (
        <>
            <nav class="navbar">
                <div class="logo">
                    <img src={logo} alt="Logo" />
                    <h1>Nutribites</h1>
                </div>

            </nav>

        </>
    )
}