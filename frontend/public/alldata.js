

function AllData(){

    const [data, setData] = React.useState(''); 

    React.useEffect(() => {
        fetch(`/account/all`)
    .then(res => res.text())
    .then(data => {
        console.log(data)
        setData(data);
    })
      
    }, [])
    

    // fetch(`/account/all`)
    // .then(res => res.text())
    // .then(data => {
    //     console.log(data)
    //     props.setData(data)
    // })
    
     
    
    
            
          
        return (<>
             {/* <h5>Details</h5> */}
           <tabel className="table-auto">
            <th>
                Details
            </th>
          
            <tr>
                <td>{data}</td>
            </tr>
           
            </tabel>            
        </>);
      
    }


    