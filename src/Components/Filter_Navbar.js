import React from "react";
// import './Filter.css';


class FilterNavbar extends React.Component {
    render() {
        return (
           <div>
                <div className="header">
                <div className="logo">e!</div>
                <div className="userarea">

                    <button className="login">Login</button>
                    <button className="signup">Create an account</button>

                </div>
            </div>
           </div>
        )
    }
}

export default FilterNavbar;