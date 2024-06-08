import axios from "axios";
import React, { useEffect, useState } from "react";
import { ComponentsBlock } from './components/ComponentsBlock';


// const componentsBlock = await axios.post('https://hidden-refuge-97632-934ef58eadcb.herokuapp.com/getSSR', {componentsQty: 10})
//   .then(({data}) => data);

function App() {
  // const [components, setComponents] = useState('');

  return (
    <div className="app">
      <h1>Web page to test SSR in SEO</h1>
      <ComponentsBlock componentsQty={100} />
    </div>
  );
}
export default App;