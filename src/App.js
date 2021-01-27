import React from "react";

import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import bg from "./components/Photo/bg2.jpg";


 const App = () => {
  return(
    <>
    <Header 
      title="This is title"
      descr="This is Description!"/>
     	<Layout 
  		id={1} 
  		title="One"
  		descr="OneOneOne"
  		urlBg={bg}
  	/>
  	<Layout 
  		id={2}
  		title="Two"
  		descr="TWOTWOTWO"
  		colorBg="red"
  	/>
  	<Layout 
  		id={3}
  		title="Three"
  		descr="ThreeThreeThree"
  		urlBg={bg}
  	/>
  	<Footer />
  	</>
  )
}

export default App; 