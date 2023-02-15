import { useEffect, useLayoutEffect, useState } from "react";
import { Head, Link, useForm } from '@inertiajs/react';

export const AdminLayout = ({children}) => {
    //Sidebar
    const [visibility, setVisibility] = useState(false);
    const [mobileView, setMobileView] = useState(false);
    const [themeState] = useState({
        main: "default",
        header: "theme",
        skin: "light",
    });
    useEffect(() => {
        viewChange();
    }, []);
    // Stops scrolling on overlay
    useLayoutEffect(() => {
        if (visibility) {
            document.body.style.overflow = "hidden";
            document.body.style.height = "100%";
        }
        if (!visibility) {
            document.body.style.overflow = "auto";
            document.body.style.height = "auto";
        }
    }, [visibility]);
    //Adds classes to body
    useEffect(() => {
        document.body.className = `nk-body bg-lighter npc-invest has-touch nk-nio-theme ${
            themeState.skin === "dark" ? "dark-mode" : ""
        }`;
    }, [themeState, visibility]);
    // function to toggle sidebar
    const toggleSidebar = (e) => {
        e.preventDefault();
        if (visibility === false) {
            setVisibility(true);
        } else {
            setVisibility(false);
        }
    };
    // function to change the design view under 1200 px
    const viewChange = () => {
        if (window.innerWidth < 992) {
            setMobileView(true);
        } else {
            setMobileView(false);
            setVisibility(false);
        }
    };
    window.addEventListener("load", viewChange);
    window.addEventListener("resize", viewChange);
    
    return (
        <>
            <Head title="Loading" />
            <div className="nk-app-root">
                <div className="nk-wrap">
                    {/* <Header
                        visibility={visibility}
                        toggleSidebar={toggleSidebar}
                        mobileView={mobileView}
                        theme={themeState.header}
                        fixed={true}
                    /> */}
                    {children}
                    {/* <Footer /> */}
                </div>
            </div>
        </>
    );
}
