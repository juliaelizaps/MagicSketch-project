import { Link } from "react-router-dom";
import {Header} from "./Header";
import {Footer} from "./Footer";

type Props = {children:React.ReactNode}
const Layout = ({children}:Props) => {
  return (
    <div className="layout">
    <Header />
    <div className="layout-container">
        {children}
    </div>
    <Footer/>
    </div>
    
  );
};

export default Layout;

<Layout>
    hi
</Layout>