import {Component} from 'react';

class Buttons extends Component {
    render(){
        return(
            <section>
                <button onClick={this.props.previousFn}>Previous</button>
                <button onClick={this.props.nextFn}>Next</button>
            </section>
        )
    }
}

export default Buttons;