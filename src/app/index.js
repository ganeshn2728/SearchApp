import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import './styles/styles.css'
import SearchContainer from './components/Search/SearchContainer';

const store = configureStore()
const styles = {
  root: {
    display: 'flex',
    height: 300,
  },
};


export class App extends React.Component {


  render() {
    const { classes } = this.props
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <SearchContainer />
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default withStyles(styles)(App)

render(<App/>, window.document.getElementById('root'))
