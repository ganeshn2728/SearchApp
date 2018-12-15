import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'
import { getSearchResult } from '../../store/Search/actionCreator'

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


export class SearchContainer extends React.Component {
  constructor() {
    super()
    this.state = { value: 50 }
  }

  componentWillMount() {
      this.props.getSearchResult()
  }
  
  componentWillReceiveProps (nextProps) {
      console.log(nextProps.searchResults)
  }

  render() {
    const { classes, searchResults } = this.props
    return (
      <div id="mainContainer">
        <Grid container>
          <Grid item xs={12}>
            <SearchInput 
                searchResults = {searchResults}
             />
          </Grid>
          <Grid item xs={12}>
            <SearchResults 
                data = {searchResults}
            />
          </Grid>
        </Grid>
      </div>)
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getSearchResult,
  }, dispatch)

const mapStateToProps = state => ({
    searchResults: state.getIn(['searchContainer', 'searchResults']).toJS(),
})
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SearchContainer))
