const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props){
  function classes(){
    const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
    return 'card mb-3 ' + bg + txt;
  }

  return (
    <div className="container mt-5 mx-auto px-40 ">
    <div className={classes()} >
      <div className="text-white font-bold py-3 text-center bg-blue-700 rounded-md">{props.header}</div>
      <div className="text-black mt-3">
        {props.title && (<h5 className="font-medium text-center">{props.title}</h5>)}
        {props.text && (<p className="text-center">{props.text}</p>)}
        {props.body}
        {props.status && (<div id='createStatus'>{props.status}</div>)}
      </div>
    </div> 
    </div>     
  );    
}
