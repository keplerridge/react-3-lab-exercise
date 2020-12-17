import {Component} from 'react';
import Buttons from './components/Buttons';
import Card from './components/Card'
import data from './data'

class App extends Component {
  constructor () {
    super();
    this.state = {
      data: data,
      currentIndex: 0
    }
  }
  
  nextIndex = () => {
    let index = this.state.currentIndex
    index += 1
    if(this.state.currentIndex === data.length - 1){
      this.setState({currentIndex: 0})
    } else {
      this.setState({currentIndex: index})
    }
  }

  previousIndex = () => {
    let index = this.state.currentIndex
    index -= 1
    if(this.state.currentIndex === 0){
      this.setState({currentIndex: data.length - 1})
    } else {
      this.setState({currentIndex: index})
    }
    
  }

  render(){
    return(
      <section>
        <header>Header</header>
        <Card 
        dataArr={this.state.data}
        currentIndex={this.state.currentIndex} />
        <Buttons 
        nextFn={this.nextIndex}
        previousFn={this.previousIndex}
        />
      </section>
    )
  }
}

export default App;