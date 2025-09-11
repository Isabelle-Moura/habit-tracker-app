import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getDashboardData } from "../../services/dashboard-service.js";
import StatsCard from "../../components/composite/card/stats-card/index.js";
import LineChart from "../../components/composite/charts/line-chart/index.js";
import BarChart from "../../components/composite/charts/bar-chart/index.js";
import Heading from "../../components/ui/heading/index.js";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const navigate = useNavigate();

  const fetchDashboardData = useCallback(async () => {
    try {
      const response = await getDashboardData();
      setDashboardData(response.data);
    } catch (error) {
      if (error?.message?.includes("401") || error?.message?.includes("403")) {
        toast.error("Please log in to view dashboard");
        navigate("/login");
      } else {
        toast.error("Failed to fetch dashboard data");
      }
    }
  }, [navigate]);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  if (!dashboardData) return <div>Loading...</div>;

  return (
    <div>
      <section className="overview">
        <Heading level={2}>Overview</Heading>
        <div className="stats-grid">
          <StatsCard title="Total Habits" value={dashboardData.total_habits} />
          <StatsCard
            title="Completion Rate"
            value={`${(dashboardData.completion_rate || 0)}%`}
          />
          <StatsCard
            title="Total Completions"
            value={dashboardData.total_completions}
          />
          <StatsCard
            title="Longest Streak"
            value={`${dashboardData.longest_streak} days`}
          />
        </div>
      </section>

      <section className="pending-habits">
        <Heading level={2}>Pending Today</Heading>
        {dashboardData.pending_habits.length === 0 ? (
          <p>All caught up! Great job!</p>
        ) : (
          <ul>
            {dashboardData.pending_habits.map((habit, index) => (
              <li key={index}>
                {habit.name} ({habit.category})
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="performance">
        <Heading level={2}>Your Performance</Heading>
        <div className="performance-grid">
          {dashboardData.habits.map((habit) => (
            <div key={habit._id} className="habit-card">
              <p>
                {habit.name} ({habit.category})
              </p>
              <div className="stars">
                {"★".repeat(habit.stars) + "☆".repeat(5 - habit.stars)}
              </div>
            </div>
          ))}
        </div>
        <p>
          Best Habit:{" "}
          <span>
            {dashboardData.best_habit?.name} ({dashboardData.best_habit?.stars}
            ★)
          </span>
        </p>
      </section>

      <section className="charts">
        <Heading level={2}>Progress Insights</Heading>
        <div className="chart-container">
          <Heading level={3}>Completions by Habit</Heading>
          <BarChart
            data={dashboardData.habits}
            dataKey="completed_dates.length"
            fill="var(--green-primary)"
            name="Completions"
            xAxisKey="name"
          />
        </div>

        <div className="chart-container">
          <Heading level={3}>Weekly Progress</Heading>
          <LineChart
            data={dashboardData.weekly_progress.map((val, idx) => ({
              day: idx,
              completions: val,
            }))}
            dataKey="completions"
            stroke="var(--purple-primary)"
            xAxisKey="day"
          />
        </div>
      </section>

      <section className="insights">
        <Heading level={2}>More Insights</Heading>
        <p>
          Avg. Completion Time:{" "}
          <span>{dashboardData.avg_completion_time.toFixed(1)} habits/day</span>
        </p>
        <p>
          Top Category:{" "}
          <span>
            {dashboardData.category_performance &&
            Object.keys(dashboardData.category_performance).length > 0
              ? Object.entries(dashboardData.category_performance).reduce(
                  (a, b) => (a[1] > b[1] ? a : b)
                )[0]
              : "N/A"}
          </span>
        </p>

        <p>
          Suggestion: Focus on <span>{dashboardData.suggested_habit}</span>
        </p>
      </section>
    </div>
  );
}

export default Dashboard;
