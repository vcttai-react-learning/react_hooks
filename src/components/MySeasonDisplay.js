import React from 'react';
import '../style/MySeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        icon: 'sun'
    },
    winter: {
        text: "Burr, It's chilly.",
        icon: 'snowflake'
    }
}

class MySeasonDisplay extends React.Component
{
    constructor(props) {
        super(props);

        console.log(props);
    }

    getSeason = (lat, month) => {
        if(month > 2 && month < 9){
            return lat > 0 ? 'summer' : 'winter'; 
        }
        else {
            return lat > 0 ? 'winter' : 'summer';
        }
    }

    render(){
        const season = this.getSeason(this.props.lat, new Date().getMonth());
        const {text, icon} = seasonConfig[season];

        return (
            <div className={`my-season-display ${season}`}>
                <i className={`big ${icon} icon`}></i>
                { text }
                <i className={`big ${icon} icon`}></i>
            </div>
        );
    }
}

export default MySeasonDisplay;