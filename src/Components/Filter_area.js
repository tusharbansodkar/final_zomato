import React from "react";
import './Filter.css';

class FilterArea extends React.Component {
    render() {
        return (
            <>
                <div className="textheading">Breakfast Places in Mumbai</div>
                <div className="left">
                    <div className="filterbox">
                        <form action="">

                            <p style="font-weight: bold; font-size: 18px;">Filters</p>
                            <p style="font-weight: bold; font-size: 14px;margin-bottom: 10px;margin-top: 10px;">Select Location</p>
                            <select name="Location" id="">
                                <option value="select">Select Location</option>
                            </select>
                            <div className="cuisinelist">

                                <p style="font-size: 14px; font-weight: bold; margin-bottom: 10px;">Cuisine</p>
                                <div>

                                    <label for="northindian">

                                        <input type="checkbox" id="northindian" name="cuisine"/><div>&nbsp;</div><div>&nbsp;</div>North Indian
                                    </label>
                                </div>
                                <div>

                                    <label for="southindian">

                                        <input type="checkbox" id="southindian" name="cuisine" checked/><div>&nbsp;</div><div>&nbsp;</div>South Indian
                                    </label>
                                </div>
                                <div>

                                    <label for="chinese">

                                        <input type="checkbox" id="chinese" name="cuisine" checked/><div>&nbsp;</div><div>&nbsp;</div>Chinese
                                    </label>
                                </div>
                                <div>

                                    <label for="fastfood">

                                        <input type="checkbox" id="fastfood" name="cuisine"/><div>&nbsp;</div><div>&nbsp;</div>Fast Food

                                    </label>
                                </div>
                                <div>

                                    <label for="streetfood">
                                        <input type="checkbox" id="streetfood" name="cuisine"/><div>&nbsp;</div><div>&nbsp;</div>Street Food

                                    </label>
                                </div>
                            </div>
                            <div className="cost">

                                <p style="font-size: 14px; font-weight: bold;margin-bottom: 10px;">Cost for Two</p>
                                <div>
                                    <label for="item1">

                                        <input type="radio" id="item1" name="cost"/><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>Less than &#8377; 500
                                    </label>

                                </div>
                                <div>
                                    <label for="item2">

                                        <input type="radio" id="item2" name="cost"/><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>&#8377; 500 to &#8377; 1000
                                    </label>
                                </div>
                                <div>
                                    <label for="item3">

                                        <input type="radio" id="item3" name="cost"/><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>&#8377; 1000 to &#8377; 1500
                                    </label>
                                </div>
                                <div>
                                    <label for="item4">

                                        <input type="radio" id="item4" name="cost"/><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>&#8377; 1500 to &#8377; 2000
                                    </label>
                                </div>
                                <div>
                                    <label for="item5">

                                        <input type="radio" id="item5" name="cost"/><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>&#8377; 2000+
                                    </label>

                                </div>
                            </div>
                            <div className="sortlist">

                                <p style="font-size: 18px; font-weight: bold;margin-bottom: 10px;">Sort</p>
                                <div>
                                    <label for="lowtohigh">

                                        <input type="radio" id="lowtohigh" name="cost"/><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>Price low to high

                                    </label>
                                </div>
                                <div>
                                    <label for="hightolow">

                                        <input type="radio" id="hightolow" name="cost"/><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>Price high to low
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="right">
                    <div className="menu">
                        <div className="top">

                            <div className="image"></div>
                            <div className="textcontent">
                                <p style="font-size: 30px; font-weight: bold;">The Big Chill Cakery</p>
                                <p style="font-size: 15px; font-weight: 600;margin-left: 5px;">FORT</p>
                                <p style="font-size: 15px;margin-left: 5px;">Shop1, Plot D, Samruddhi Complex, Chincholi ...</p>
                            </div>
                        </div>
                        <hr/>
                            <div className="bottom">
                                <div className="costfortwo">
                                    <p>CUISINES:</p>
                                    <p>COST FOR TWO:</p>
                                </div>
                                <div className="bakery-price">
                                    <p>Bakery</p>
                                    <p>&#8377; 700</p>
                                </div>

                            </div>
                    </div>
                    <div className="menu">
                        <div className="top">

                            <div className="image"></div>
                            <div className="textcontent">
                                <p style="font-weight: bold; font-size: 30px;">The Big Chill Cakery</p>
                                <p style="font-size: 15px; font-weight: 600;margin-left: 5px;">FORT</p>
                                <p style="font-size: 15px;margin-left: 5px;">Shop1, Plot D, Samruddhi Complex, Chincholi ...</p>
                            </div>
                        </div>
                        <hr/>
                            <div className="bottom">
                                <div className="costfortwo">
                                    <p>CUISINES:</p>
                                    <p>COST FOR TWO:</p>
                                </div>
                                <div className="bakery-price">
                                    <p>Bakery</p>
                                    <p>&#8377; 700</p>
                                </div>
                            </div>
                    </div>
                    <div className="pagination">
                        <div>&lt;</div>
                        <div style="background-color: gray; color: white;">1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>&gt;</div>
                    </div>
                </div>
            </>
        )
    }
}

export default FilterArea;