import axios from "axios";
import React, { useEffect, useState } from "react";

const requestSSRComponents = async (componentsQty) => await axios.post(
        'https://brukhtii-node-js-ssr-ssg-4dfd839344ba.herokuapp.com/getSSR', 
        { componentsQty }
    )
    .then(({data}) => data);

export function ComponentsBlock({ componentsQty }) {
  const [components, setComponents] = useState('');

  useEffect(() => {
    async function getComponents () {
      const components = await requestSSRComponents(componentsQty);
      
      setComponents(components);
    }

    getComponents();
  }, [])

  return (
  <div className="rendering-type">
    <h1 className="rendering-type-title">SSG rendering</h1>
    <div className="components-block" dangerouslySetInnerHTML={{__html: components}}></div>
  </div>
  );
}