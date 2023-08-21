const root = document.getElementById("root");
function Fx() {
    const [counter, setCounter] = React.useState(1);
    const onClick = () => {
        setCounter((i) => i + 1);
    };
    return (<div><h3>Total click: {counter}</h3><button onClick={onClick}>Click me1</button></div>)

}
ReactDOM.render(<Fx />, root);