import React from "react";
import Header from "./Header";
import Footer from "./Footer"

export default class Layout extends React.Component {
    render() {
        const title = "Title"
        return (
            <div>
                <Header name={"some string"} title={title} />
                <Footer />
            </div>
        );
    }
}