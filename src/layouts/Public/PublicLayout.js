import React from 'react'
import { useLocation, Route, Switch } from "react-router-dom";
import routes from '../../routes';

import Header from '../../components/Public/Headers/Header';
import Footer from '../../components/Public/Footers/Footer';

const PublicLayout = () => {
    const mainContent = React.useRef(null);
    const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

    const getRoutes = (routes) => {
        return routes.map((prop, key) => {


            if (prop.layout === "/public") {
                // console.log("THIS ISS PROPSSS",prop.component())
                console.log([
                    {
                        'path':prop.layout + prop.path,
                        "component":prop.component,
                        "key":key
                    }
                ]);
                return (
         
                    // <h1>
                    //     {prop.component()}
                        
                    // </h1>

                    <Route
                        path={prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };
    return (
        <>
            <Header />
            <main id="main_content" ref={mainContent}>
                <Switch>
                    {getRoutes(routes)}
                    {/* <Redirect from="/" to="/Public/index" /> */}

                </Switch>
            </main>
            <Footer />
        </>
    )
}

export default PublicLayout
