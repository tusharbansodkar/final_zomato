import React from 'react';
import './Filter.css';
import FilterNavbar from './Filter_Navbar';
import FilterArea from './Filter_area';

class Filter extends React.Component {

    handleBack = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                {// HTML --> React Components  ( Assigmnet - 7 )
                }
                
                {/* <FilterNavbar/>
                <FilterArea/> */}

                
                <FilterNavbar/>
                {/* <FilterArea/> */}
                
                
            </div>
        )
    }
}

export default Filter;