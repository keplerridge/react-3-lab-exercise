import {Component} from 'react';

class Card extends Component {
    render(){
        // console.log(this.props.dataArr)
        
        return (
            <section>
                <h2>{this.props.dataArr[this.props.currentIndex]['id']}</h2>
                <h2>{this.props.dataArr[this.props.currentIndex]['name']['first']} {this.props.dataArr[this.props.currentIndex]['name']['last']}</h2>
                <h2>From: {this.props.dataArr[this.props.currentIndex]['city']}, {this.props.dataArr[this.props.currentIndex]['country']}</h2>
                <h2 value={''}>Job Title: {this.props.dataArr[this.props.currentIndex]['title']}</h2>
                <h2 value={''}>Employer: {this.props.dataArr[this.props.currentIndex]['employer']}</h2>
                <h2>Favorie Movies: {this.props.dataArr[this.props.currentIndex]['favoriteMovies']}</h2>
                <h2>{this.props.currentIndex + 1}/{this.props.dataArr.length}</h2>
            </section>
        )
    }
}

export default Card;