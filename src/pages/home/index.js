import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getDashboardData } from "../../services/dashboard-service.js";
import StatsCard from "../../components/composite/card/stats-card/index.js";
import LineChart from "../../components/composite/charts/line-chart/index.js";
import BarChart from "../../components/composite/charts/bar-chart/index.js";
import Heading from "../../components/ui/heading/index.js";
import Logo from "../../assets/images/logo.png";
import Icon from "../../components/ui/icon/index.js";
import { FaUserCircle } from "react-icons/fa";
import Container from "../../components/ui/container/index.js";
import SideMenu from "../../components/composite/side-bar/index.js";
import { PiUserCircleDuotone } from "react-icons/pi";
import Button from "../../components/ui/button/index.js";
import Badge from "../../components/ui/badge/index.js";
import { GoPlus } from "react-icons/go";

function Home() {
  // const [dashboardData, setDashboardData] = useState(null);
  // const navigate = useNavigate();

  // const fetchDashboardData = useCallback(async () => {
  //   try {
  //     const response = await getDashboardData();
  //     setDashboardData(response.data);
  //   } catch (error) {
  //     if (error?.message?.includes("401") || error?.message?.includes("403")) {
  //       toast.error("Please log in to view dashboard");
  //       navigate("/login");
  //     } else {
  //       toast.error("Failed to fetch dashboard data");
  //     }
  //   }
  // }, [navigate]);

  // useEffect(() => {
  //   fetchDashboardData();
  // }, [fetchDashboardData]);

  // if (!dashboardData) return <div>Loading...</div>;

  return (
    <>
      <section className="flex h-screen">
        {/* Sidebar */}
        <SideMenu />

        {/* Conteúdo principal */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-background-light">
            <Heading level={2}>Home</Heading>
            <div className="flex items-center gap-1">
              <Button
                label="New Habit"
                variant="green"
                iconColor="#f5f5f5"
                iconLeft={GoPlus}
                size="small"
              />
              <Icon
                component={PiUserCircleDuotone}
                size={45}
                className="text-gray-600"
              />
            </div>
          </header>

          {/* Conteúdo da página */}
          <main className="p-2">
            <section className="flex flex-col gap-2">
              <section className="flex items-center justify-between !max-w-[100px] gap-[2px]">
                <Badge variant="orange">Today</Badge>
                <Badge variant="neutral">Weekly</Badge>
                <Badge variant="neutral">Monthly</Badge>
                <Badge variant="neutral">Overall</Badge>
              </section>

              <section className="flex items-center justify-between !max-w-[100px] gap-[6px]">
                <Badge variant="aqua" isRounded>
                  All
                </Badge>
                <Badge variant="outline" isRounded>
                  Morning
                </Badge>
                <Badge variant="outline" isRounded>
                  Afternoon
                </Badge>
                <Badge variant="outline" isRounded>
                  Evening
                </Badge>
              </section>
            </section>
            {/* Aqui entram seus gráficos, cards etc */}
            <p>Conteúdo do dashboard...</p>
          </main>
        </div>
      </section>
    </>
  );
}

export default Home;
