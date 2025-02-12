import Renan    from "./images/Renan_square.jpg";
import Banguela from "./images/Banguela.jpg";
import Mosaic   from "./images/Mosaic.jpg";

const links = {
    fog_itch: "https://fog-icmc.itch.io/",
    navbar: "https://buildui.com/recipes/animated-tabs/",
    dark_mode: "https://www.npmjs.com/package/react-toggle-dark-mode/"
};

function Info() {
    return (
        <div>
            <div className="content-section">
                <img src={Renan} alt="Foto do Renan"/>
                <div className="text-section">
                    <h1>Sobre o Renan</h1>
                    <p>
                        Estudante de Engenharia mecatrônica, interessado<br/>
                        em automação industrial, programação e eletrônica.<br/>
                        Atualmente participando como coordenador de RH no<br/>
                        grupo de extensão <a href={links.fog_itch} target="_blank" rel="noopener noreferrer">Fellowship of the Game</a>.
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
                <img src={Mosaic} alt="Mosaico de cores do site e fotos dos programadores dos componentes utilizados"/>
                <div className="text-content">
                    <h1>Sobre o site</h1>
                    <p>
                        Esse site foi construído utilizando HTML, CSS,<br/>
                        Tailwind e Javascript, implementando a <a href={links.navbar}  target="_blank" rel="noopener noreferrer">barra<br/>
                        deslizante de guias</a> do Build UI e o<br/>
                        <a href={links.dark_mode} target="_blank" rel="noopener noreferrer">alternador de temas</a> de Jose Felix.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Info;
