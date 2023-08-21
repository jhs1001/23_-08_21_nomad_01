const root = document.getElementById("root");

const input = React.createElement("input", {
    type: "number",
    onChange: (e) => {
        const value = e.target.value;
        const stars = [];
        for (let i = 0; i < value; i++) {
            const star = React.createElement("div", {
                style: {
                    width: "100px",
                    height: "100px",
                    backgroundColor: "yellow",
                    borderRadius: "50%",
                    display: "inline-block",
                },
            });
            stars.push(star);
        }
        const container = React.createElement("div", null, stars);
        ReactDOM.render(container, root);
    },
});

const container = React.createElement("div", null, input);
ReactDOM.render(container, root);
