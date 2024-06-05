import axios from "axios";
import React from "react";

const testRequest = await axios.get('https://hidden-refuge-97632-934ef58eadcb.herokuapp.com/getHtml').then(({data}) => data);
console.log(testRequest);

function App() {
  return (
    <div className="App">
      <h1>Hello World..!</h1>
    </div>
  );
}
export default App;