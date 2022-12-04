const { text } = require("express");

function Balance() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    <Card
      bgcolor="info"
      header="Balance"
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus} /> :
        <BalanceMsg setShow={setShow} setStatus={setStatus} />}
    />
  )

}

function BalanceMsg(props) {
  return (<>
    <h5>Success</h5>
    <button type="submit"
      className="mt-3 bg-green-500 hover:bg-green-400 text-white py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
      onClick={() => {
        props.setShow(true);
        props.setStatus('');

      }}>
      Check balance again
    </button>
  </>);
}

function BalanceForm(props) {
  const [email, setEmail] = React.useState('');
  const [balance, setBalance] = React.useState('');

  function handle() {
    fetch(`/account/findOne/${email}`)
      .then(res => res.text())
      .then(text => {
        try {
          const data = JSON.parse(text);
          // alert();
          // props.setStatus('');
          props.setShow(false);
          props.setBalance()
          // console.log('JSON:', data);
        } catch (err) {
          props.setStatus(text)
          console.log('err:', text);
        }
      })

  }

  return (<>
<div className="mx-8 p-5">
    Email<br />
    <input type="input"
      className="border w-full mt-2 h-10 px-2"
      placeholder="Enter email"
      value={email}
      onChange={e => setEmail(e.currentTarget.value)} /><br />

    <button type="submit"
      className="mt-3 bg-orange-500 hover:bg-orange-400 text-white py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
      onClick={handle}>
      Check Balance
    </button>
    </div>
  </>);
}