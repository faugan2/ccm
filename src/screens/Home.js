import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HomeContent from "../components/HomeContent";

import Layout from "../components/Layout";

const Home=()=>{

    return(
        <Layout>
            <div className="home">
                <Nav />
            <div className="content">
                <HomeContent />
                <Footer />
            </div>
            </div>
        </Layout>
    );
    return(
        <div className="home">
            <Nav />
            <div className="content">
                <HomeContent />
                <Footer />
            </div>
            
        </div>
    )
}
export default Home;