import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import incomeData from "../../data/incomeData.json";

const HostIncome = () => {
  return (
    <>
      <div className="relative p-5 min-h-70v bg-orange-50 md:px-60 md:flex md:justify-between">
        <div className="md:basis-1/6">
          <div className="py-2">
            <h3>Income</h3>
          </div>
          <div className="py-2">
            <span>Income last</span>
            <span className="ml-1 font-medium underline">30 days</span>
          </div>
          <div className="py-2">
            <h2>$2,260</h2>
          </div>
        </div>
        
        <div className="md:basis-3/6">
          <Bar
            data={{
              labels: incomeData.map((data) => data.label),
              datasets: [
                {
                  label: "1 = $1k",
                  data: incomeData.map((data) => data.value),
                  backgroundColor: [
                    "#ffead0",
                    "#ffead0",
                    "#ffead0",
                    "#ffead0",
                    "#ff8c38",
                    "#ff8c38",
                  ],
                  borderRadius: 5,
                },
              ],
            }}
          />
        </div>

        <div className="ml-10 md:basis-2/6">
          <div className="flex items-center justify-between my-3">
            <div className="basis-3/4">
              <h4>Your transactions (3)</h4>
            </div>
            <div className="basis-1/4 text-end">
              <span>Last</span>
              <span className="ml-1 font-medium underline">30 days</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 my-3 bg-white rounded-lg">
            <div className="basis-3/4">
              <h3>$720</h3>
            </div>
            <div className="basis-1/4 text-end">
              <span>1/12/22</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 my-3 bg-white rounded-lg">
            <div className="basis-3/4">
              <h3>$560</h3>
            </div>
            <div className="basis-1/4 text-end">
              <span>10/11/22</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 my-3 bg-white rounded-lg">
            <div className="basis-3/4">
              <h3>$980</h3>
            </div>
            <div className="basis-1/4 text-end">
              <span>23/11/22</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostIncome;
