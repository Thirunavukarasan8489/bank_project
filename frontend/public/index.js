function Spa(props) {
  // const[view, setView] = React.useState(true)

  // const handle=()=>{
  //   setView(false)
  // }
  return (
    <HashRouter>
      <div>
        
        <NavBar/>   
        {/* {view ? <NavBar/> : <NavBar1/>} */}
        {/* <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100, role:'Admin'}]}}> */}
          <div className="container" style={{padding: "20px"}}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />            
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata/" component={AllData} />          
            
          </div>
        {/* </UserContext.Provider> */}
      </div>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
