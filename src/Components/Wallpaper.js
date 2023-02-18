import React from 'react';
import '../Styles/home.css';

class Wallpaper extends React.Component {
    render() {
        const { locationsData } = this.props;
        return (
            <div>
                {/* Adding Wallpaper */}
                <img src="./Assets/homepageimg.png" width="100%" height="450" />
                <div>

                    <div className="logo">
                        <p>e!</p>
                    </div>

                    <div className="headings">
                        Find the best restaurants, cafes, bars
                    </div>

                    <div className="locationSelector">
                        <select className="locationDropdown">
                            <option value="0" selected disabled>Select</option>
                            {locationsData.map((item) => {
                                return <option value="0">{`${item.name}, ${item.city}`}</option>
                            })}
                        </select>
                        <div>
                            <span className="glyphicon glyphicon-search search"></span>
                            <input className="restaurantsinput" type="text" placeholder="Please Enter Restaurant Name" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wallpaper;