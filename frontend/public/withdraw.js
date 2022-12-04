const { json, text } = require("express");

function Withdraw(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  
  return (
    <Card
      bgcolor="success"
      header="Withdraw"
      status={status}
      body={show ? 
        <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
        <WithdrawMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function WithdrawMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="mt-3 bg-green-500 hover:bg-green-400 text-white py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Withdraw again
    </button>
  </>);
}

function WithdrawForm(props){
  const[email, setEmail] = React.useState('');
  const [amount, setAmount] = React.useState('');  
  const [balance, setBalance] = React.useState('');
  
          

  function handle(){
  fetch(`/account/update/${email}/-${amount}`)
  .then(res => res.text())
  .then(text =>{
    try{
      const data = JSON.parse(text)
      props.setShow(false);
      props.setAmount()
      console.log('JSON :',text)
    }catch(err){
      props.setStatus(text)
      console.log('err:', text)
    }
  })
    
  }
  return(<>
  <div className="mx-8 p-5">
  Email<br/>
  <input type="email"
  className="border w-full mt-2 h-10 px-2"
  placeholder="Enter Your Email"
  value={email}
  onChange={e => setEmail(e.currentTarget.value)}
  />
<br/><br/>
    Amount<br/>
    <input type="number" 
      className="border w-full mt-2 h-10 px-2" 
      placeholder="Enter amount" 
      value={amount} 
      onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="mt-3 bg-orange-500 hover:bg-orange-400 text-white py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded" 
      onClick={handle}>
        Withdraw
    </button>
    </div>

  </>);
}
