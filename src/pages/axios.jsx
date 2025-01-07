import axios from "axios";
import { useEffect, useState } from "react";

const ChartExample = () => {
  const [chartUrl, setChartUrl] = useState("");

  useEffect(() => {
    const fetchChart = async () => {
      const config = {
        type: "line", // Change to "bar" or other chart types as needed
        data: {
          labels: ["January", "February", "March", "April", "May"],
          datasets: [
            {
              label: "Sales",
              data: [10, 25, 15, 20, 80],
              borderColor: "rgba(75,192,192,1)",
              backgroundColor: "rgba(75,192,192,0.2)",
              fill: true,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      };

      try {
        const response = await axios.post(
          "https://quickchart.io/chart/create",
          { chart: config, width: 600, height: 300, format: "png" }
        );
        setChartUrl(response.data.url); // QuickChart provides a URL to render the chart
      } catch (error) {
        console.error("Error generating chart:", error);
      }
    };

    fetchChart();
  }, []);

  return (
    <div>
      <h1>Graph Example</h1>
      {chartUrl ? (
        <img src={chartUrl} alt="Graph" style={{ maxWidth: "100%" }} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default ChartExample;
