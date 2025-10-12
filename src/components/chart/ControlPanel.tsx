import { useSelector } from "react-redux"
import type { IRootState } from "../../type"

function ControlPanel() {
  const variables = useSelector((state: IRootState) => state.member.variables);

  return (
    <div>
      <div className='text-center mb-2 font-bold'>Control Panel</div>
      <div className='text-right mb-2'>
        <button type="button">
          Apply
        </button>
      </div>

      {variables.map(member => (
        <div key={member.id}>
          {member.name}
        </div>
      ))}
      
    </div>
  )
}

export default ControlPanel