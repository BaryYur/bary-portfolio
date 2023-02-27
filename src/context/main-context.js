import React, { useEffect, useState } from "react";

const MainContext = React.createContext({});

export const MainContextProvider = ({ children }) => {
    const htmlTag = document.getElementById("html-tag");
    const [themeName, setThemeName] = useState(JSON.parse(localStorage.getItem("themeName")));

    const changeThemeHandler = () => {
        setThemeName(htmlTag.getAttribute("data-theme"));
    }

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem("themeName"))) {
            localStorage.setItem("themeName", JSON.stringify("light"));
        }

        themeName === "light" ?
            htmlTag.setAttribute("data-theme","light") :
            htmlTag.setAttribute("data-theme","business");

        localStorage.setItem("themeName", JSON.stringify(themeName));
    }, [themeName])

    return (
        <MainContext.Provider
            value={{
                htmlTag: htmlTag,
                themeName: themeName,
                changeTheme: changeThemeHandler,
            }}
        >
            {children}
        </MainContext.Provider>
    );
}

export default MainContext;