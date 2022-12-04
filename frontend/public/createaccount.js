function CreateAccount(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? 
        <CreateForm setShow={setShow}/> : 
        <CreateMsg setShow={setShow}/>}
    />
  )
}

function CreateMsg(props){
  return(<>
    <h5>Your Account has been created Successfully</h5>
    <button type="submit" 
      className="mt-3 bg-green-500 hover:bg-green-400 text-white py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded" 
      onClick={() => props.setShow(true)}>Add another account</button>
  </>);
}

function CreateForm(props){
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');  

  function handle(){
    fetch(`/account/create/${name}/${email}/${password}`, {
      method: "GET",
      headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify(data)
    }).then(res =>
      res.json(),
      alert("Submitted Sucessfully"),
      // props.setStatus(''),
      props.setShow(false)
    ).then(data =>
      console.log(data)
    ).catch(err => {
      alert("error")
      console.log(err)
    }
    )
        
  }   
  return (<>
<div className="mx-8 p-5">
    Name <br/> <input type="input" 
      className="border w-full mt-2 h-10 px-2" 
      placeholder="Enter your name" 
      value={name} 
      onChange={e => setName(e.currentTarget.value)} /><br/><br/>

    Email address <br/> <input type="email" 
      className="border w-full mt-2 h-10 px-2" 
      placeholder="Enter your email" 
      value={email} 
      
      onChange={e => setEmail(e.currentTarget.value)}/><br/><br/>

    Password <br/> <input type="password" 
      className="border w-full mt-2 h-10 px-2" 
      placeholder="Enter your New password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/><br/>

    <button type="submit" 
      className="mt-3 bg-orange-500 hover:bg-orange-400 text-white py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded" 
      disabled={!name || !email || !password}
      onClick={handle}>Create Account</button>
      </div>
  </>);
}