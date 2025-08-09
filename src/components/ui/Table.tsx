
interface TableProps {
  headers: string[],
  dataSource: any,
  renderComponent: any
}

function Table({ headers, dataSource, renderComponent }: TableProps) {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {headers.map(header => (
            <th key={header} scope="col" className="px-6 py-3">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource.map(renderComponent)}
      </tbody>
    </table>
  )
}

export default Table