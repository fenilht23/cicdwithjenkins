import { useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";

const App = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState('');

  useEffect(() => {
    const delay = setInterval(
      () => {
        setData('Hello World, From App.js. Component loaded!');
        setLoading(false);
      },
      2000
    )

    return () => clearInterval(delay);
  }, [data]);


  return (
    <div className="container-sm mt-5">
      <div className="card text-center mx-5">
        <div className="card-header">
          <h1>Parent Component</h1>
        </div>
        <div class="card-body">
          <button className="btn btn-primary" onClick={()=>{setData('');setLoading(true)}}>Reset</button>
        </div>
      </div>
      <ChildComponent data={data} loading={loading} />
    </div>
  )
}

export default App;
