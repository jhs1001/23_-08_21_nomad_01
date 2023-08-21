const root = document.getElementById("root");
let counter = 0;
function fx01() {
    counter = counter + 1;
    fx02();
}

function fx02() {
    ReactDOM.render(<Container />, root);
}

const Container = () => (<di><h3>Total click: {counter}</h3><button onClick={fx01}>button</button></di>);
ReactDOM.render(<Container />, root);