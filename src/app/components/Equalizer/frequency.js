import React from 'react'
import Slider from '@material-ui/lab/Slider';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  slide: {
    float: 'left',
    display: 'inline',
    width: 0,
    padding: 20,
    height: 240,
  },
};

export class Frequency extends React.Component {
  constructor() {
    super()
    this.state = { value: 0}
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.initiallValue });
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.slide}>
        <Slider value={this.state.value} min={-12} max={12} step={1} onChange={this.handleChange} vertical />
        {this.props.frequencyText}
      </div>
    )
  }
}

export default withStyles(styles)(Frequency)
