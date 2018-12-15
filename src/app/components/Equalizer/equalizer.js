import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { render } from 'react-dom'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { getEqualizer, getBands, setFrequency } from '../../store/Equalizer/actionCreator'
import Frequency from './frequency'

const styles = {
  root: {
    display: 'flex',
    height: 300,
  },
  paper: {
    margin: 20,
    color: '#ccc',
  },
  preset: {
    padding: '5px 15px',
    backgroundColor: '#00adff',
    fontSize: 24,
    color: '#fff',
  },
  frequencyTop: {
    padding: 20,
  },
  frequencyMid: {
    padding: '70px 0px 100px 20px',
  },
  frequencyBottom: {
    paddingLeft: 20,
  },
};


export class Equalizer extends React.Component {
  constructor() {
    super()
    this.state = { value: 50 }
  }

  componentDidMount() {
    this.props.getEqualizer();
    this.props.getBands();
  }

  setFrequency = (value, key) => event => {
    this.props.setFrequency(value)
  }

  render() {
    const { classes } = this.props
    return (
      <div id="mainContainer">
        <Grid container>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Grid container>
                <Grid item xs={1}>
                  <div className={classes.frequencyTop}>-12db</div>
                  <div className={classes.frequencyMid}>0</div>
                  <div className={classes.frequencyBottom}>+12db</div>
                </Grid>
                <Grid item xs={7}>
                  { this.props.frequency.map((option,key) => {
                    return (
                      <Frequency
                        key={key}
                        initiallValue={option.position}
                        frequencyText={option.frequency}
                      />
                    )
                  })}
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    <Grid container>
                      <Grid item xs={12}>
                        <div className={classes.preset}>Preset</div>
                        <MenuList>
                          { this.props.bands.map((option,key) => {
                            return (
                              <MenuItem key={key} onClick={this.setFrequency(option, key)}>{option}</MenuItem>
                            )
                          })}
                        </MenuList>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={2}>

          </Grid>
        </Grid>
      </div>)
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getEqualizer,
    getBands,
    setFrequency,
  }, dispatch)

const mapStateToProps = state => ({
  frequency: state.getIn(['EqualizerContainer', 'frequency']).toJS(),
  bands: state.getIn(['EqualizerContainer', 'bands']).toJS(),
})
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Equalizer))
