import React from "react";
const Home = () => {
    return (
        <div className="container-fluid text-left">
            <p style={{fontSize: "xx-large"}}>Welcome to the Game of Thrones application.</p><br/>
            <p style={{fontSize: "medium"}}>To search your favorite character, go to <span style={{color: "Blue"}}>'Search'</span> tab. <br/>
            To get the graph of House data, go to <span style={{color: "Blue"}}>'Houses'</span> tab</p>
        </div>
    );
};

export default Home;