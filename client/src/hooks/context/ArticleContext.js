// import React, { useState, useEffect } from "react";

// const handleFetchArticles = () => {
//   const [data, setData] = useState([]);

//   // Function to fetch articles
//   const fetchArticles = async () => {
//     try {
//       const response = await fetch("YOUR_API_ENDPOINT"); // Replace with your API endpoint
//       const articles = await response.json();
//       setData(articles);
//     } catch (error) {
//       console.error("Error fetching articles:", error);
//     }
//   };

//   // Use useEffect to trigger fetch on component mount
//   useEffect(() => {
//     fetchArticles();
//   }, []);

//   return { data }; // Return data to use in a component
// };

// export default handleFetchArticles;
