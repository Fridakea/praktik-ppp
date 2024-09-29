import { darkmodeIcon, lightmodeIcon } from "../assets/icons/exports";

export function DarkmodeToggle() {
    const toggleMode = () => {
        const app = document.getElementById("app");

        if(app.classList.contains('dark-mode')) app.classList.remove('dark-mode');
        else app.classList.add('dark-mode');

        localStorage.setItem('dark-mode', app.classList.contains('dark-mode'));
    }

    return (
        <>
            <button onClick={toggleMode} className="dark-mode-toggle dark-mode-hide">
                {darkmodeIcon}
            </button>

            <button onClick={toggleMode} className="dark-mode-toggle dark-mode-only">
                {lightmodeIcon}
            </button>
        </>
    );
}