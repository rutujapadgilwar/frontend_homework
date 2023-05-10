import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

// url for the Thrones API
const URL = "https://thronesapi.com/api/v2/Characters";
const Houses = () => {
  const [familyCounts, setFamilyCounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        const data = response.data;
        const familyData = data.map((item) => ({
          name: item.fullName,
          family: item.family.split(",")[0],
        }));
        const familyCount = familyData.reduce((counts, family) => {
          let familyName = family.family;
          if (!familyName || typeof familyName !== "string") {
            return counts;
          }
          if (
            familyName === "" ||
            familyName === "None" ||
            familyName === "Unknown" ||
            familyName === "Unkown"
          ) {
            familyName = "None";
          }
          if (familyName.indexOf("House") < 0) {
            familyName = `House ${familyName}`;
          }
          if (familyName === "House Lanister") {
            familyName = "House Lannister";
          }
          if (familyName === "House Targaryan") {
            familyName = "House Targaryen";
          }
          counts[familyName] = (counts[familyName] || 0) + 1;
          return counts;
        }, {});

        const familyCountsArray = Object.entries(familyCount).map(
          ([family, count]) => ({
            family,
            count,
          })
        );
        const filterData = familyCountsArray.filter(
          (obj) => obj.family !== "House None"
        );
        setFamilyCounts(filterData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const chartData = {
    labels: familyCounts.map((item) => item.family),
    datasets: [
      {
        label: "Family Count",
        data: familyCounts.map((item) => item.count),
        backgroundColor: [
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(199, 199, 199, 0.8)",
          "rgba(83, 102, 255, 0.8)",
          "rgba(40, 159, 64, 0.8)",
          "rgba(210, 199, 199, 0.8)",
          "rgba(78, 52, 199, 0.8)",
          "rgba(255, 69, 0, 0.8)", // orangeRed
          "rgba(0, 128, 128, 0.8)", // teal
          "rgba(218, 165, 32, 0.8)", // goldenRod
          "rgba(255, 99, 71, 0.8)", // tomato
          "rgba(255, 140, 0, 0.8)", // darkorange
          "rgba(154, 205, 50, 0.8)", // yellowgreen
          "rgba(255, 215, 0, 0.8)", // gold
          "rgba(186, 85, 211, 0.8)", // mediumorchid
          "rgba(70, 130, 180, 0.8)", // steelblue
          "rgba(219, 112, 147, 0.8)", // palevioletred
          "rgba(144, 238, 144, 0.8)", // lightgreen
          "rgba(205, 92, 92, 0.8)", // indianred
          "rgba(135, 206, 250, 0.8)", // lightskyblue
          "rgba(255, 165, 0, 0.8)", // orange
          "rgba(128, 0, 128, 0.8)", // purple
          "rgba(70, 130, 90, 0.8)", // seaGreen
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(159, 159, 159, 1)",
          "rgba(83, 102, 255, 1)",
          "rgba(40, 159, 64, 1)",
          "rgba(210, 199, 199, 1)",
          "rgba(78, 52, 199, 1)",
          "rgba(255, 69, 0, 0.8)", // orangeRed
          "rgba(0, 128, 128, 0.8)", // teal
          "rgba(218, 165, 32, 0.8)", // goldenRod
          "rgba(255, 99, 71, 0.8)", // tomato
          "rgba(255, 140, 0, 0.8)", // darkorange
          "rgba(154, 205, 50, 0.8)", // yellowgreen
          "rgba(255, 215, 0, 0.8)", // gold
          "rgba(186, 85, 211, 0.8)", // mediumorchid
          "rgba(70, 130, 180, 0.8)", // steelblue
          "rgba(219, 112, 147, 0.8)", // palevioletred
          "rgba(144, 238, 144, 0.8)", // lightgreen
          "rgba(205, 92, 92, 0.8)", // indianred
          "rgba(135, 206, 250, 0.8)", // lightskyblue
          "rgba(255, 165, 0, 0.8)", // orange
          "rgba(128, 0, 128, 0.8)", // purple
          "rgba(70, 130, 90, 0.8)", // seaGreen
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <h1>Houses of Characters</h1>
      <div style={{ width: "45%" }}>
        <Doughnut data={chartData} />
      </div>
    </div>
  );
};
export default Houses;
