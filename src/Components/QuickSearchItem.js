import React from 'react';

class QuickSearchItem extends React.Component {
    render() {
        return (
            <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="tileContainer">
                    <div className="tileComponent1">
                        <img src="./Assets/breakfast.jpg" height="150" width="140" />
                    </div>
                    <div className="tileComponent2">
                        <div className="componentHeading">
                            Breakfast
                        </div>
                        <div className="componentSubHeading">
                            Start your day with exclusive breakfast.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuickSearchItem;