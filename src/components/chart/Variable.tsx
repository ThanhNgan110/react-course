import React from 'react'
import type { IVariable } from '../../type'
import { useDispatch } from 'react-redux'
import { setVariables } from '../../redux/member.actions'


const data: IVariable[] = []

for (let i = 0; i < 20; i++) {
  const newMember = {
    id: i + 1,
    name: Date.now() + '-' + i,
    odd: Boolean(i % 2)
  }
  data.push(newMember)
}

function Variable() {
  const dispatch = useDispatch();
  const [members] = React.useState(data);

  function onChangeBox(e: any, member: IVariable) {
    if(e.target.checked) {
      dispatch(setVariables(member))
    }
  }

  return (
    <div>
      <div className='text-center mb-2 font-bold'>Variable</div>
      {members.map(member => (
        <div key={member.id}>
          <input type="checkbox" onChange={e => onChangeBox(e, member)} />
          {member.name}
        </div>
      ))}
    </div>
  )
}

export default Variable