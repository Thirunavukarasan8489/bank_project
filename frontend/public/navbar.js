function NavBar() {
  const [user, setUser] = React.useState();
  setInterval(() => {
    const user = localStorage.getItem("Name");
    setUser(user);
  }, 500);
  return (
    <nav className="bg-gray-800">
      {/* <button className="" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className=""></span>
      </button> */}
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" id="navbarNav">
        <div className="relative flex h-16 items-center justify-between">

          <a className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" href="#">Bank</a>

          <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#/CreateAccount/">Create Account</a>

          <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#/login/">Login</a>

          <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#/deposit/">Deposit</a>


          <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#/withdraw/">Withdraw</a>


          <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#/balance/">Balance</a>


          <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#/alldata/">All Data</a>



        </div>
      </div>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <label>{user}</label>
          </li>

        </ul>

      </div>

    </nav>
  );
}