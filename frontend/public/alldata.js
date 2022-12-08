const baseURL = "/account/all";

function AllData() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);
    console.log(post)
    if (!post) return null;
    return (<>
        <div>
            <h1 className='text-3xl	text-center'>Details</h1>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <tabel className="mt-5">
                    <thead>
                        <tr >
                            <th className='border text-white py-3 w-48 bg-gradient-to-r from-indigo-500 to-indigo-500'>Name</th>
                            <th className='border text-white py-3 w-48 bg-gradient-to-r from-indigo-500 to-indigo-500'>Email</th>
                            <th className='border text-white py-3 w-48 bg-gradient-to-r from-indigo-500 to-indigo-500'>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {post.map((v, i) => {
                            return (
                                <tr>
                                    <td className='border text-center bg-gradient-to-r from-indigo-200 to-indigo-200'>{v.name}</td>
                                    <td className='border text-center bg-gradient-to-r from-indigo-200 to-indigo-200'>{v.email}</td>
                                    <td className='border text-center bg-gradient-to-r from-indigo-200 to-indigo-200'>{v.balance}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </tabel>
            </div>

            <tr></tr>

            {/* {data} */}

        </div>
    </>);

}


