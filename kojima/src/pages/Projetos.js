import MarkVR from "./images/MarkVR.jpg";
import FoGuinho from "./images/FoGuinho.jpg";
import BrokenThreads from "./images/BrokenThreads.jpg";

const links = {
    sspot_vr: "https://sspot-vr.github.io",
    fogungeon: "https://uber020.itch.io/enter-the-fogungeon",
    broken_threads: "https://salmaze.itch.io/broken-threads/",
};

function Projetos() {
    return (
        <div>
            <div className="content-section">
                <img src={MarkVR} alt="Robô Mark do jogo SSPOT-VR"/>
                <div className="text-section">
                    <h1>SSPOT-VR</h1>
                    <p>
                        O <a href={links.sspot_vr} target="_blank" rel="noopener noreferrer">SSPOT-VR </a>
                        é um projeto de pesquisa que visa ensinar lógica de
                        programação para o público juvenil, através de um jogo interativo
                        de quebra-cabeças num cenário de realidade virtual.
                    </p>
                </div>
            </div>

            <div className="content-section">
                <img src={FoGuinho} alt="Mascote do FoG, FoGuinho, no jogo Enter the FoGungeon"/>
                <div className="text-section">
                    <h1>FoGungeon</h1>
                    <p>
                        Originado de um grupo de adoradores de
                        roguelikes, <a href={links.fogungeon} target="_blank" rel="noopener noreferrer">FoGungeon </a> é
                        um jogo 'inspirado' em EtG, com o mascote FoGuinho sobrevivendo a ondas de coelhos raivosos.
                    </p>
                </div>
            </div>

            <div className="content-section">
                <img src={BrokenThreads} alt="Logo do jogo Broken Threads"/>
                <div className="text-section">
                    <h1>Broken Threads</h1>
                    <p>
                        <a href={links.broken_threads} target="_blank" rel="noopener noreferrer">Broken Threads </a>
                        é um jogo de duelos de tiro em primeira
                        pessoa, utilizando conexões diretas por LAN. Ao final
                        da partida, o jogador com a maior pontuação vence.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Projetos;
