const root = document.getElementById("root");
function MinToHoures() {
    const [amount, setAmount] = React.useState(0);
    const [inverted, setInverted] = React.useState(false);
    const onChange = (event) => {
        setAmount(event.target.value);
    };
    const reset = () => setAmount(0);
    const onInvert = () => {
        reset();
        setInverted((current) => !current);
    };
    return (
        <div>
            <button>btn</button>
            <button>btn2</button>
        </div>
    );
};
function App0() {
    return <h1>VRApint</h1>
};
function App() {
    const [index, setIndex] = React.useState("0");
    const onSelect = (event) => {
        setIndex(event.target.value);
    }
    console.log('render w/', index)
    return (
        <div>
            <h1>Select Page</h1>
            <select value={index} onChange={onSelect}>
                <option value="0">1</option>
                <option value="1">2</option>
                <option value="2">3</option>
            </select>
            <hr />
            {index === "0" ? "Select" : null}
            {index === "1" ? <App0 /> : null}
            {index === "2" ? <MinToHoures /> : null}
        </div>
    );
};
const rootContainer = ReactDOM.createRoot(root);
rootContainer.render(<App />);