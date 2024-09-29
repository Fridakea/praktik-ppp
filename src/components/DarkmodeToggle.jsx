import { darkmodeIcon, lightmodeIcon } from "../assets/icons/exports";

export function DarkmodeToggle() {


    const toggleMode = () => {
        const app = document.getElementById("app");

        if(app.classList.contains('dark-mode')) app.classList.remove('dark-mode');
        else app.classList.add('dark-mode');
    }

    return (
        <>
            <button onClick={toggleMode} className="dark-mode-hide">
                {darkmodeIcon}
            </button>

            <button onClick={toggleMode} className="dark-mode-only">
                {lightmodeIcon}
            </button>
        </>
    );
}