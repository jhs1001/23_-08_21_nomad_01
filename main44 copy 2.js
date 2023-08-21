const root = document.getElementById("root");
const Title = () => (<h3>hello45</h3>);
const Button = () => (<button>Click!</button>);
const Button2 = () => (<button>Click2!</button>);
const Container2 = () => (<div><Title/><Button2/><Button/></div>);
ReactDOM.render(<Container2/>,root);