import "../styles/layout.scss";
import "../styles/layout_mobile.scss";

const Layout=(props)=>{
    return(
        <div className="layout">
            {props.children}
        </div>
    );
}

export default Layout;