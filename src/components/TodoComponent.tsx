import { useTable } from "../hooks/useTable";
import Table from "./ui/Table";

function TodoComponent() {
 const { dataSource } = useTable({
  source: 'todos'
 });

  return (
    <div>
      <h4>Todo</h4>
      <Table 
        headers={['Title', 'Status']}
        dataSource={dataSource}
        renderComponent={(data: any) => (
          <tr key={data.title} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {data.title}
            </th>
            <td className="px-6 py-4">
              {data.completed ? 'Completed' : 'New'}
            </td>
          </tr> 
        )}
      />
    </div>
  )
}

export default TodoComponent