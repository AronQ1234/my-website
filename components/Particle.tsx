import React from 'react'
import { useTheme } from "next-themes";
const Particle = () => {
    const {systemTheme, theme, setTheme} = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    console.log(currentTheme)
    return (
        <>
            <script src="/particles.js"></script>
            {currentTheme === "dark" ? <script src="/app.js"></script> : <script src="/white-particles.js"></script>}
        </>
    )
}

export default Particle