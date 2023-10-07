import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isLightMode: false}

  changeMode = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  render() {
    let modeCls
    const {isLightMode} = this.state
    const modeText = isLightMode
      ? ((modeCls = 'light-mode'), 'Dark Mode')
      : ((modeCls = 'dark-mode'), ' Light Mode')

    return (
      <div className="bg-container">
        <div className={modeCls}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.changeMode}>
            {modeText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
