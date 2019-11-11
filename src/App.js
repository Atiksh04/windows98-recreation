import React from 'react';
import logo from './logo.svg';
import './App.css';
import Startup from './components/startup'
import Desktop from './components/desktop'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      startup:true
    }
  }
  componentDidMount(){
    let timer = setTimeout(()=>{
      this.setState({
        startup:false
      })
    console.log('timer',this.state.startup)
    },8000)
  }
  render(){
  return (
    <div className="App">
    {this.state.startup ? <Startup/> : <Desktop/>}
    </div>
  );
}
}

export default App;
