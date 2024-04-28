import { useQuery } from "@tanstack/react-query";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

const ChartComponent = () => {
  const {
    data: historicalData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["historicalData"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
      return data;
    },
  });
  console.log(historicalData);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const data = {
    labels: Object.keys(historicalData?.cases || {}),
    datasets: [
      {
        label: "Cases",
        data: Object.values(historicalData?.cases || {}),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching country data</p>;
  }
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default ChartComponent;
