import React from "react";
import { ComponentsBlock } from './components/ComponentsBlock';

function App() {
  return (
    <div className="app">
      <h1>Web page to test SSR in SEO</h1>
      <ComponentsBlock componentsQty={1000} />
    </div>
  );
}
export default App;