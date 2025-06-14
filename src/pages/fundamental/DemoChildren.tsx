import Dialog from '../../components/ui/Dialog'

function DemoChildren() {
  return (
    <div>
      <h1>DemoChildren</h1>

      <Dialog isOpen={true}>
        <form>
          First Name: <input type="text" /> <br />
          Last Name: <input type="text" /> <br />
          <button type='submit'>Submit</button>
        </form>
      </Dialog>

      <br />
      <Dialog isOpen={false}>
        This is login success
      </Dialog>
    </div>
  )
}

export default DemoChildren