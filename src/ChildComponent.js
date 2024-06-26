const ChildComponent = ({ data, loading }) => {
    return (
        <div className="card text-center mt-5 mx-5">
            <div className="card-header">
                <h1>Child Component</h1>
            </div>
            <div class="card-body">
                <h5 class="card-title">
                    {
                        loading ? (
                            <div class="spinner-border text-info" role="status">
                                <span class="visually-hidden">Loading Component...</span>
                            </div>
                        ) : (data)
                    }
                </h5>
            </div>
        </div>
    )
}

export default ChildComponent;
