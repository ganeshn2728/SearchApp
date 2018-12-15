import React from 'react'
import PropTypes from 'prop-types'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Tooltip from '@material-ui/core/Tooltip'
import TableSortLabel from '@material-ui/core/TableSortLabel'

const columnData = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
  { id: 'gender', numeric: false, disablePadding: false, label: 'Gender' },
]

export class SearchResultHead extends React.Component {
    createSortHandler = property => event => {
      this.props.onRequestSort(property)
    };

    render () {
      const { order, orderBy } = this.props

      return (
        <TableHead>
          <TableRow>
            {columnData.map(column => {
              return (
                <TableCell
                  key={column.id}
                  numeric={column.numeric}
                  padding="none"
                  sortDirection={orderBy === column.id ? order : false}
                >
                  {(column.id === 'user_id') ? (
                    <Tooltip
                      title="Sort"
                      placement="bottom-start"
                      enterDelay={300}
                    >
                      <TableSortLabel
                        active={orderBy === column.id}
                        direction={order}
                        onClick={this.createSortHandler(column.id)}
                      >
                        {column.label}
                      </TableSortLabel>
                    </Tooltip>
                  ) : (
                    <span>{column.label}</span>
                  )}
                </TableCell>
              )
            }, this)}
          </TableRow>
        </TableHead>
      )
    }
}

SearchResultHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
}

export default SearchResultHead