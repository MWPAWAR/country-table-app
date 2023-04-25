const TBody = ({ tableInstance }) => {
  const {
    getTableBodyProps,
    rows,
    prepareRow,
  } = tableInstance

  return (
    <tbody {...getTableBodyProps()}>
      {
        rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {
                row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>
                      {['col6', 'col7'].includes(cell.column.id)
                        ? <img src={cell.value} height="30" width="30" />
                        : cell.render('Cell')
                      }
                    </td>
                  )
                })}
            </tr>
          )
        })}
    </tbody>
  )
}

export default TBody;
