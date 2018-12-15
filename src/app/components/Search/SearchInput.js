import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import AutoComplete from '../Common/AutoComplete'

const styles = {
  root: {
    display: 'flex',
    height: 300,
  },
  paper: {
    margin: 20,
    color: '#ccc',
  },
  
};


export class SearchInput extends React.Component {
  constructor() {
    super()
    this.state = { selectRef: '' }
  }

  readFilters = (colId, sugg) => {
    const { selectRef } = this.state
    if (sugg !== '') {
      selectRef[colId] = sugg
    } else {
      delete selectRef[colId]
    }
    this.setState({ selectRef })
    console.log('selectRef')
    console.log(selectRef)
    //this.props.onFilterRequest(selectRef)
  }

  


  render() {
    const { classes, searchResults } = this.props
    return (
      <div id="mainContainer">
        <Paper className={classes.paper}>
            <AutoComplete
                suggestions={searchResults}
                getSuggestionCallback={this.readFilters.bind(this)}
                column_id="name"
                filter_name="User Name"
                clearField="No"
                id="loadUserName"
            />
        </Paper>
      </div>)
  }
}

export default withStyles(styles)(SearchInput)
