// import  { useState, useEffect } from "react"; // import use state and use effect
// //function userdata 
// function UserData() { 
//   const [data, setData] = useState([]); // use state initialize krdiya

//   useEffect(() => { // useeffect define kiya 
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, []); 

//   return (
//     <ul>
//       {data.map(user => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }

// export default UserData;




import  { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = () => {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);
  const chartRef = useRef(null);

  useEffect(() => {
    // Simulate fetching data with setTimeout (mocking an API call)
    setTimeout(() => {
      // Example of simulated API data
      const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        values: [65, 59, 80, 81, 56, 55],
      };

      // Update chart data after "fetching" it
      setChartData({
        labels: data.labels, // Labels for the x-axis (months)
        datasets: [
          {
            label: 'Monthly Sales', // Label for the chart's data series
            data: data.values, // Y-axis values for the chart
            borderColor: 'rgba(75,192,192,1)', // Line color
            borderWidth: 2, // Line width
            fill: false, // Do not fill the area under the line
          },
        ],
      });
      setLoading(false); // Stop loading once data is "fetched"
    }, 2000); // Simulate 2 seconds of loading time

    // Cleanup chart on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy(); // Destroy the previous chart instance to prevent canvas reuse error
      }
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Customize chart options (optional)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Position of the legend (top, left, right, bottom)
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
  };

  return (
    <div>
      <h2>Monthly Sales Data</h2>
      {/* Reference chart component to manage cleanup */}
      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  );
};

export default ChartComponent;
