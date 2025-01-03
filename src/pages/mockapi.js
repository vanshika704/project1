// mockApi.js
export const fetchLineChartData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Sales",
              data: [500, 400, 300, 600, 800, 700],
              borderColor: "blue",
              backgroundColor: "rgba(0, 0, 255, 0.1)",
            },
          ],
        });
      }, 1000); // Simulate API delay
    });
  };
  