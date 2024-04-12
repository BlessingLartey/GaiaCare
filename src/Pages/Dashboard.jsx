import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
function Dashboard() {
  const chartRef = useRef(null);

  const yearlyTargets = [
    { id: 1, department: "Sales", target: 500000, achieved: 300000 },
    { id: 2, department: "Marketing", target: 300000, achieved: 200000 },
    { id: 3, department: "Finance", target: 700000, achieved: 400000 },
    { id: 4, department: "Operations", target: 400000, achieved: 250000 },
  ];

  useEffect(() => {
    if ("dashboard") {
      // Calculate yearly targets yet to be achieved
      const remainingTargets = yearlyTargets.map(
        (target) => target.target - target.achieved
      );
      const labels = yearlyTargets.map((target) => target.department);
      const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"];

      if (chartRef.current !== null) {
        chartRef.current.destroy();
      }

      const ctx = document.getElementById("pieChart");
      chartRef.current = new Chart(ctx, {
        type: "pie",
        data: {
          labels: labels,
          datasets: [
            {
              data: remainingTargets,
              backgroundColor: colors,
              hoverBackgroundColor: colors,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <>
        <h2>Dashboard</h2>
        <div className="chart-container">
          <canvas id="pieChart"></canvas>
        </div>
        <h3>Yearly Targets</h3>
        <table>
          <thead>
            <tr>
              <th>Department</th>
              <th>Target ($)</th>
              <th>Achieved ($)</th>
              <th>Remaining ($)</th>
            </tr>
          </thead>
          <tbody>
            {yearlyTargets.map((target) => (
              <tr key={target.id}>
                <td>{target.department}</td>
                <td>{target.target}</td>
                <td>{target.achieved}</td>
                <td>{target.target - target.achieved}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
}

export default Dashboard;
