import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import "./NavBar.css"

const tabs = [
    { id: "home",     label: "Home",     path: "/home" },
    { id: "projetos", label: "Projetos", path: "/projetos" },
    { id: "info",     label: "Info",     path: "/info" }
];

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(
        tabs.find(tab => tab.path === (location.pathname || "/"))?.id || "home"
    );

    const handleTabClick = (tab) => {
        setActiveTab(tab.id);
        navigate(tab.path);
    };

    return (
        <div className="flex space-x-1">
            <div className="navbar-container">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab)}
                        className={`${
                            activeTab === tab.id ? "" : "hover:text-[color:var(--h1-color)]"
                        } relative rounded-full px-1 py-1.5 transition`}
                        style={{
                            WebkitTapHighlightColor: "transparent",
                        }}
                    >
                        {activeTab === tab.id && (
                            <motion.span
                                layoutId="bubble"
                                // className="absolute inset-0 z-10 bg-white mix-blend-difference"
                                className="absolute inset-0.5 z-10 bg-[color:var(--h1-color)]"  //bubble color
                                style={{ borderRadius: 100 }}
                                transition={{ type: "spring", bounce: 0.0, duration: 0.2 }}
                            />
                        )}
                        <span
                            className={`${
                                activeTab === tab.id ? "text-[color:var(--background-color)]" : "hover:text-[color:var(--h1-color)] text-[color:var(--text-color)]"
                            } relative z-20 font-bold text-1xl px-4 py-2`}
                        >
                            {tab.label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default NavBar;
