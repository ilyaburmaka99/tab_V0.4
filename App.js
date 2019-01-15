//import
import React , { Component } from 'react'
import {Wrapper} from 'styles/Tab/styles'
import {activeTabs,myContent,textForTab} from 'constant/Tab/Constant'
import {Welcome} from 'component/Tab/Text/Text'
import {Butn} from 'component/Tab/Button/Button'


class App extends Component {
state = {
  activeTab: activeTabs.FIRST,
  text: myContent.FIRST,
}
handleSubmit = (activeTab,text) => (e) =>{
  this.setState({activeTab})
  this.setState({text:myContent[text]})
}
  render() {
    const {activeTab} = this.state
    const {text} = this.state
    const element = <Welcome name = {text} />;
    return(
        <Wrapper>
            {textForTab.map(({ value, title }) =>
              <Butn
               key =  {value}
               inputColor = {activeTab === value ? 'red' : ''}
               onClick = {this.handleSubmit(value,value)}
               title={title}
              />
            )}
              {element}
        </Wrapper>
    )
  }
}
export default App;
