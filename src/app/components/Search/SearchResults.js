import React from 'react'
import { Redirect } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import SearchResultHead from './SearchResultHead'

const styles = theme => ({
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
    padding: '24px 24px 50px 24px',
  },
  deleteIcon: {
    color: '#1976d2',
  },
  navLink: {
    color: '#1976d2',
    curser: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  cellPadding: {
    padding: '0px 5px',
    cursor: 'pointer',
  },
  cellPaddingCenter: {
    padding: '0px 5px',
    textAlign: 'center',
    cursor: 'pointer',
  },
  groupStateRFL: {
    backgroundColor: '#85D2ED',
    padding: 5,
    fontSize: 10,
  },
  groupStateRFO: {
    backgroundColor: '#FFF7C0',
    padding: 5,
    fontSize: 10,
  },
  groupStateIn: {
    backgroundColor: '#FCBE86',
    padding: 5,
    fontSize: 10,
  },
  groupStateHis: {
    backgroundColor: '#C0BEC1',
    padding: 5,
    fontSize: 10,
  },
})

export class SearchResult extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      order: 'asc',
      orderBy: 'user_id',
      selected: [],
      page: 0,
      rowsPerPage: 20,
      rowsPerPageOptions: [20, 50, 100],
      redirectPage: '',
    }
  }

  componentWillMount () {
    this.setState({redirectPage: ''})
  }
  handleChangePage = (event, page) => {
    this.setState({ page })
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value })
  }

  handleRequestSort = (property) => {
    const orderBy = property
    let order = 'desc'

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc'
    }

    this.setState({ order, orderBy })
  }

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  changeUserState = (userId, updateState) => event => {
    const sendData = {
      user_id: userId,
      new_status: updateState
    }
    this.props.updateUserStatusCB(sendData)
  }
   
  sortData = (order, orderBy) => {
    return order === 'desc' ? (a, b) => b[orderBy] - a[orderBy] : (a, b) => a[orderBy] - b[orderBy]
}

  render () {
    const { classes, data } = this.props
    const { order, orderBy, rowsPerPage, rowsPerPageOptions, page, redirectPage } = this.state
    if (redirectPage) {
      return <Redirect to={redirectPage} />
    }
    return (
      <div className={classes.tableWrapper}>
        <Table className={classes.table} aria-labelledby="tableTitle">
          <SearchResultHead
            order={order}
            orderBy={orderBy}
            onRequestSort={this.handleRequestSort}
            rowCount={data.length}
          />
          <TableBody>
            {data
              .sort(this.sortData(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((obj, key) => {
                const isSelected = this.isSelected(obj.user_id)
                return (
                  <TableRow
                    hover
                    aria-checked={isSelected}
                    tabIndex={-1}
                    key={key}
                    selected={isSelected}
                  >
                    <TableCell className={classes.cellPadding} >{obj.name}</TableCell>
                    <TableCell className={classes.cellPadding} >{obj.gender}</TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          rowsPerPageOptions={rowsPerPageOptions}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </div>
    )
  }
}

SearchResult.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default (withStyles(styles)(SearchResult))