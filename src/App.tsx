import logo from "./logo.svg";
import "./App.css";
import "./styles/main.scss";
import Preview from "./components/Preview";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="header">
                    <h1>workbook</h1>
                </div>
                <div className="controls controls--accent"></div>
                <div className="preview">
                    {/* TODO accept user input */}
                    <Preview />
                </div>
            </div>
        </div>
    );
}

export default App;
