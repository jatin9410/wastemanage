import { Link } from 'react-router-dom'

function HeaderNavigatio(props){
    return (
        <div className="header-navigation">
            <div className="header-navigation-logo">  
                <img alt="companyLogo" className="header-navigation-logo-image" src="https://res.cloudinary.com/tamely-app/image/upload/v1664114942/petmojo-website/Waste-management.svg_efrl7y.png" />
            </div>
            <div className="header-navigation-right">
                <Link href="/home"><div className="header-navigation-option">Home</div></Link>
                <Link href="/home"><div className="header-navigation-option">About Us</div></Link>
                <Link href="/login"><div className="header-navigation-option-login">Login</div></Link>
                <Link href="/register"><div className="header-navigation-option-register">Register</div></Link>
            </div>
        </div>
    );
};

export default HeaderNavigatio;