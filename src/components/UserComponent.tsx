import { useTable } from "../hooks/useTable";
import Table from "./ui/Table";

function UserComponent() {
 const { dataSource } = useTable({
  source: 'users'
 });

  return (
    <div>
      <h4>User</h4>
      <Table 
        headers={['Name', 'User Name', 'Email', 'Phone']}
        dataSource={dataSource}
        renderComponent={(data: any) => (
          <tr key={data.title} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {data.name}
            </th>
            <td className="px-6 py-4">
              {data.username}
            </td>
            <td className="px-6 py-4">
              {data.email}
            </td>
            <td className="px-6 py-4">
              {data.phone}
            </td>
          </tr> 
        )}
      />
    </div>
  )
}

export default UserComponent