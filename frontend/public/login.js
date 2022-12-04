function Login(){
  
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  return (
    <div>
    <Card
      bgcolor="secondary"
      header="Login"
      status={status}
      body={show ?
        <LoginForm setShow={setShow} setStatus={setStatus}/>:
        <LoginMsg setShow={setShow} setStatus={setStatus}/>
      }
    />
    </div>
  ) 
}

function LoginMsg(props){  
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="mt-3 bg-green-500 hover:bg-green-400 text-white py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded" 
      onClick={() => props.setShow(true)}>
        Authenticate again
    </button>
  </>);
}

function LoginForm(props){
  
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  
  
  function handle(){
    fetch(`/account/login/${email}/${password}`)
    .then(res => res.text())
    .then(text =>{
      try{
        const data = JSON.parse(text);
        alert("Login Sucessfully");
        props.setStatus('');
        props.setShow(false);
       
        console.log('JSON:',data);
      }catch(err){
        props.setStatus(text)
        console.log('err:',text);
      }
    });
    
  }
  return (<>
<div className="mx-8 p-5">
    Email<br/>
    <input type="input" 
      className="border w-full mt-2 h-10 px-2" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      className="border w-full mt-2 h-10 px-2" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>
    <button type="submit" className="mt-3 bg-orange-500 hover:bg-orange-400 text-white py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded" disabled={!email || !password}onClick={handle}>Login</button>
    </div>  
  </>);
}