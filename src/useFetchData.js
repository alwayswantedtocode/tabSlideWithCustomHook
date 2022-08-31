import { useState, useEffect } from "react";

const url = "https://course-api.com/react-tabs-project";
const useFetchData = () => {
  const [loading, setLoading] = useState(true);
  const [tabSlide, setTabSlide] = useState([]);
  const fetchTabSlide = async () => {
    try {
      const response = await fetch(url);
      const slide = await response.json();
      setLoading(false);
      setTabSlide(slide);
      console.log(slide);
    } catch (error) {
      setLoading(false);
    }
  };
  console.log();
  useEffect(() => {
    fetchTabSlide();
  }, []);
};

export default useFetchData;
