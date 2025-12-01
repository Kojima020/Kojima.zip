import { useAsciiText, colossal } from 'react-ascii-text';

function Home() {

    const asciiTextRef = useAsciiText({
        // animationCharacters: "\"8",
        animationCharacterSpacing: 1,
        animationDelay: 2000,
        animationDirection: "vertical",
        animationInterval: 500,
        animationLoop: true,
        animationSpeed: 60,
        font: colossal,
        // colossal / univers
        // https://github.com/samuelweckstrom/react-ascii-text
        // https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type+Something+&x=none&v=4&h=4&w=80&we=false
        text: "Kojima.zip",
    });


    return (
        <div>
            <ascart>
                <pre ref={asciiTextRef}></pre>
            </ascart>
        </div>
    );
}

export default Home;
