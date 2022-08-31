import React, { useState } from "react";
import Slide from "./Slide";
import useFetchData from "./useFetchData";

// const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);

  //  const useUsers =()=>{
  //     const [tabSlide, setTabSlide] = useState([]);
  //     // const [tabBody, setTabBody] = useState(0);

  //     const fetchTabSlide = async () => {
  //       try {
  //         const response = await fetch(url);
  //         const slide = await response.json();
  //         setLoading(false);
  //         setTabSlide(slide);
  //         console.log(slide);
  //       } catch (error) {
  //         setLoading(false);
  //       }
  //     };
  //     console.log();
  //     useEffect(() => {
  //       fetchTabSlide();
  //     }, []);
  //   }
  // const [tabSlide, setTabSlide] = useState([]);
  // const [tabBody, setTabBody] = useState(0);

  // const fetchTabSlide = async () => {
  //   try {
  //     const response = await fetch(url);
  //     const slide = await response.json();
  //     setLoading(false);
  //     setTabSlide(slide);
  //     console.log(slide);
  //   } catch (error) {
  //     setLoading(false);
  //   }
  // };
  // console.log();
  // useEffect(() => {
  //   fetchTabSlide();
  // }, []);

  useFetchData();

  if (loading) {
    return (
      <div className="loading-container">
        <h1 className="loading">loading...</h1>
      </div>
    );
  }
  return (
    <main className="main">
      <div className="heading-container">
        <h1 className="heading">experience</h1>
        <div className="underline"></div>
      </div>
      <Slide />
    </main>
  );
};

export default App;
