import "../styles/home_content.scss";
import "../styles/home_content_mobile.scss";
import bg from "./img/banner.webp";
const HomeContent=()=>{
    return(
        <div className="home_content" style={{
            backgroundImage:`url(${bg})`,
            backgroundRepeat: 'no-repeat',
        }}>
            <h2>Bienvenue</h2>
        </div>
    );
}

export default HomeContent;