const ChildComponent = ({ data, loading }) => {
    return (
        // <div>
        //     <h1>Child Component</h1>
        //     {
        //         loading ? (
        //             <div class="spinner-border text-info" role="status">
        //                 <span class="visually-hidden">Loading...</span>
        //             </div>
        //         ) : ( data )
        //     }
        // </div>
        <div className="card text-center mt-5 mx-5">
            <div className="card-header">
                <h1>Child Component</h1>
            </div>
            <div class="card-body">
                <h5 class="card-title">
                    {
                        loading ? (
                            <div class="spinner-border text-info" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        ) : (data)
                    }
                </h5>
            </div>
        </div>
    )
}

export default ChildComponent;