import RenanSquare    from "./images/RenanSquare.jpg";
import Banguela from "./images/Banguela.jpg";
import ReactLogo    from "./images/ReactLogo.jpg";

const links = {
    fog_itch: "https://fog-icmc.itch.io/",
    navbar: "https://buildui.com/recipes/animated-tabs/",
    // dark_mode: "https://www.npmjs.com/package/react-toggle-dark-mode/"
};

function Info() {
    return (
        <div>
            <div className="content-section">
                <img src={RenanSquare} alt="Foto do Renan"/>
                <div className="text-section">
                    <h1>Sobre o Renan</h1>
                    <p>
                        Estudante de Engenharia mecatrônica, interessado em
                        automação industrial, programação e eletrônica.
                        Atualmente participando como coordenador de RH no grupo de
                        extensão <a href={links.fog_itch} target="_blank" rel="noopener noreferrer">Fellowship of the Game</a>.
                    </p>
                </div>
            </div>

            <div className="content-section">
                <img src={Banguela} alt="Foto do Banguela"/>
                <div className="text-section">
                    <h1>Sobre o Banguela</h1>
                    <p>
                        Meu gatinho preto.
                    </p>
                </div>
            </div>

            <div className="content-section">
                <img src={ReactLogo} alt="Logo do React"/>
                <div className="text-section">
                    <h1>Sobre o site</h1>
                    <p>
                        Esse site foi construído utilizando HTML, CSS, Javascript e React, implementando
                        a <a href={links.navbar}  target="_blank" rel="noopener noreferrer">barra de guias</a> do
                        Build UI e diferentes pacotes do React.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Info;
