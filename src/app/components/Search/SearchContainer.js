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
    this.state = { data: [], originalData: [] }
  }

  componentWillMount() {
      this.props.getSearchResult()
  }
  
  componentWillReceiveProps (nextProps) {
      this.setState( {data : nextProps.searchResults, originalData: nextProps.searchResults })
  }

  onFilterRequest = (selectRef) => {
    let tempData = this.state.originalData
    for (let key of Object.keys(selectRef)) {
      tempData = tempData.filter((o) => {
        const checkArr = key.split(',')
        let objVal = ''
        checkArr.map((obj, index) => {
          objVal = (objVal === '') ? o[obj] : objVal[obj]
        })
        const checkVal = objVal
        return (checkVal && (checkVal.toLowerCase().indexOf(typeof selectRef[key] === 'string' ? selectRef[key].toLowerCase() : selectRef[key]) !== -1))
      })
    }
    this.setState({ data: tempData })
  }
  
  render() {
    const { classes, searchResults } = this.props
    return (
      <div id="mainContainer">
        <Grid container>
          <Grid item xs={12}>
            <SearchInput 
                searchResults = {searchResults}
                onFilterRequest = {this.onFilterRequest}
             />
          </Grid>
          <Grid item xs={12}>
            <SearchResults 
                data = {this.state.data}
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
