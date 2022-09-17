import React from "react";

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    render() {
        const title = "this is my title";
        const showTitle = false;
        return (
            <div>
                <h1>Inventory System</h1>
                <p>Manage our stuff.</p>
            </div>
        );

    }
}

export default Info;