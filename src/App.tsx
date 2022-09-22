import "./App.css";
import "./styles/main.scss";
import Preview from "./components/Preview";
import { alphabet, digits } from "./constants";

const previewBlocks = (num: number, characters: string[]) => {
    let blocks = [];
    for (let i = 1; i <= num; i++) {
        const sliceStart = (i - 1) * 5;
        const sliceEnd = i * 5;
        blocks.push(<Preview key={i} characters={characters.slice(sliceStart, sliceEnd)} />);
    }
    return blocks;
};

const remBlocks = (num: number, characters: string[]) => {
    let blocks = [];
    for (let i = 0; i < num; i++) {
        blocks.push(<Preview key={i} characters={characters.slice(-1 * num)} />);
    }
    return blocks;
};

function App() {
    const numLetterGroups = Math.floor(alphabet.length / 5);
    const numDigitGroups = Math.floor(digits.length / 5);

    const leftoverLetters = alphabet.length % 5;
    const leftoverDigits = digits.length % 5;

    return (
        <div className="App">
            <div className="wrapper">
                <div className="header">
                    <h1>workbook</h1>
                </div>
                <div className="controls controls--accent">
                    {/* // TODO 
  - button to make digital file 
  - button to create multi-page printout  */}
                </div>

                {/* TODO accept user input */}
                <h2>Uppercase Letters</h2>
                <>{previewBlocks(numLetterGroups, alphabet)}</>

                {leftoverLetters > 0 && remBlocks(leftoverLetters, alphabet)}

                <>{previewBlocks(numDigitGroups, digits)}</>

                {leftoverDigits > 0 && remBlocks(leftoverDigits, digits)}
            </div>
        </div>
    );
}

export default App;
