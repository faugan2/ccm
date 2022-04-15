import "../styles/about.scss";
import "../styles/about_mobile.scss";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Footer from "../components/Footer";


const About =()=>{
    return(
        <Layout>
            <div className="home">
                <Nav />
            <div className="content">
                <div className="about">
                    valeurs et engagements
                </div>
                <Footer />
            </div>
            </div>
        </Layout>
    );
}

export default About;