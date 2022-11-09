
import logoDark from '../../../src/assets/logo-dark.png';

function LogoNav() {
    return (
        <div className="nav_logo_container">
        <img id="logo" className="nav_logo" src={logoDark} alt="logo" width="200" height="50" />
        </div>
    );
}
export default LogoNav;