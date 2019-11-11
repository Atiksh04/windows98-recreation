import React from 'react';
import logo from './logo.svg';
import './App.css';
import Startup from './components/startup'
import Desktop from './components/desktop'
import ShutDown from './components/shutdown'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      startup:true,
      shutdown:false
    }
    this.terminateProcess=this.terminateProcess.bind(this)
  }
  componentDidMount(){
    let timer = setTimeout(()=>{
      this.setState({
        startup:false
      })
    console.log('timer',this.state.startup)
    },8000)
  }
  terminateProcess(value){
    console.log('inside app',value)
    if(value === 'true')
      this.setState({
        shutdown:true
      })
  }
  render(){
  return (
    <div className="App">
    {this.state.startup ? <Startup/> 
      :
      this.state.shutdown ? <ShutDown/> 
      :
      <Desktop shutdown={this.terminateProcess}/>
      
    }
    </div>
  );
}
}

export default App;
