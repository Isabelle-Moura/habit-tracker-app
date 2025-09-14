import React from "react";
import Heading from "../../components/ui/heading/index.js";
import Icon from "../../components/ui/icon/index.js";
import Grid from "../../components/ui/grid/index.js";
import SideMenu from "../../components/composite/side-bar/index.js";
import { PiUserCircleDuotone } from "react-icons/pi";
import Button from "../../components/ui/button/index.js";
import Badge from "../../components/ui/badge/index.js";
import { GoPlus } from "react-icons/go";
import Card from "../../components/ui/card/index.js";
import { Link, useNavigate } from "react-router-dom";
import {
  FcAlarmClock,
  FcBriefcase,
  FcLike,
  FcRuler,
  FcMediumPriority,
} from "react-icons/fc";

function Home() {
  // const [dashboardData, setDashboardData] = useState(null);
  const navigate = useNavigate();

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
                onClick={() => navigate("/register-habit")}
              />
              <Icon
                component={PiUserCircleDuotone}
                size={45}
                className="text-gray-600"
              />
            </div>
          </header>

          {/* Conteúdo da página */}
          <main className="p-2 flex flex-col gap-2">
            <section className="flex flex-col gap-2">
              <section className="flex items-center justify-between !max-w-[100px] gap-[2px]">
                <Badge variant="orange">Today</Badge>
                <Badge variant="neutral">Weekly</Badge>
                <Badge variant="neutral">Monthly</Badge>
                <Badge variant="neutral">Overall</Badge>
              </section>

              <section className="flex items-center justify-between !max-w-[100px] gap-[6px] mb-3">
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

            <Grid cols={2}>
              <Card
                icon={FcAlarmClock}
                title="Wake up before 8 am"
                bgColor="greenSoft"
              />
              <Card
                icon={FcBriefcase}
                title="Work for, at least, 6 hours"
                bgColor="pinkSoft"
              />
              <Card
                icon={FcRuler}
                title="Practice Drawing"
                bgColor="blueSoft"
              />
              <Card
                icon={FcLike}
                title={`Read "The Bible"`}
                bgColor="orangeLight"
              />
            </Grid>

            <Heading
              level={6}
              withLine
              linePosition="right"
              className="text-basic-grayStrong"
            >
              Completed
            </Heading>
            <Grid cols={2}>
              <Card
                icon={FcMediumPriority}
                title="Note tasks at breakfast"
                bgColor="redLight"
                checked
              />
            </Grid>
          </main>
        </div>
      </section>
    </>
  );
}

export default Home;
