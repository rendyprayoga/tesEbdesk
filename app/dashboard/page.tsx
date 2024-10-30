import Graone from "@/components/grafik/Graone";
import GraTwo from "@/components/grafik/GraTwo";
import GraThree from "@/components/grafik/GraThree";
import GraFour from "@/components/grafik/GraFour";
import GraFive from "@/components/grafik/GraFive";
import GraSix from "@/components/grafik/GraSix";
import GraSeven from "@/components/grafik/GraSeven";
import Sidebar from "@/components/Sidebar";

const Dashboard = () => {
  return (
    <section className="bg-[#F5F6FA] ">
      <Sidebar />
      <div className="flex-1 p-5 overflow-auto">
        <div className="grid gap-5 max-w-screen-xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-sm p-4">
              <Graone />
            </div>
            <div className="bg-white rounded-sm p-4">
              <GraTwo />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-sm p-4">
              <GraThree />
            </div>
            <div className="bg-white rounded-sm p-4">
              <GraFour />
            </div>
            <div className="bg-white rounded-sm p-4">
              <GraFive />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-sm p-4">
              <GraSix />
            </div>
            <div className="bg-white rounded-sm p-4 md:col-span-2">
              <GraSeven />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
