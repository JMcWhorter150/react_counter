import React from 'react';
import axios from 'axios';


const nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=8qGpTdQvMkcaKJ6hcAja8R9Vz1wIxA7rp99GhkhO`

class Nasa extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            url: ""
        }
    }

    render() {
        return (
            <div>
                <button onClick={this._handleNext}>Next</button>
                <img src={this.state.url} />
            </div>
        );
    }

    _handleNext = async () => {
        let randomDate = this._randomDate(new Date(2012, 0, 1), new Date());
        let year = randomDate.getFullYear();
        let month = (randomDate.getMonth() + 1);
        let day = (randomDate.getMonth() + 1);
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        let response = await axios.get(nasaUrl + `&date=${year}-${month}-${day}`);
        let newUrl = await response.data.url
        this.setState({
            url: newUrl
        })
    }

    // https://stackoverflow.com/questions/9035627/elegant-method-to-generate-array-of-random-dates-within-two-dates
    _randomDate = (start, end) => {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
}

export default Nasa;