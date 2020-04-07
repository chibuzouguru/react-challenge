import React from 'react';
import { useDispatch } from 'react-redux';
import { setLoading as setLoadingAction, setUser } from 'ducks/actions';
import { Button } from 'components/buttons/Button';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries, AreaSeries } from 'react-vis';
import ReusablePaperBackground from 'components/paper_background/paper';
import cn from './DashboardPage.module.scss';
const { PUBLIC_URL } = process.env;

const DashboardPage = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLoadingAction(true));
    dispatch(
      setUser({
        email: '',
        authenticated: false,
      }),
    );
    dispatch(setLoadingAction(false));
  };

  return (
    <div className={cn.dashboard}>
      <nav className={cn.navigation}>
        <img className={cn.logo} src={`${PUBLIC_URL}/cogn-logo-white.png`} alt="Cognitiv Logo" />
        <Button width="10%" onClick={handleLogout}>
          Logout
        </Button>
      </nav>
      <main>
        <h2>Welcome to your Dashboard</h2>
        <section className={cn.graph_section}>
          <ReusablePaperBackground>
            <MyLineGraph />
          </ReusablePaperBackground>
          <ReusablePaperBackground>
            <MyAreaGraph />
          </ReusablePaperBackground>
        </section>
      </main>
    </div>
  );
};

const sampleGraphData = [
  { x: 1, y: 5 },
  { x: 2, y: 10 },
  { x: 3, y: 4 },
  { x: 4, y: 2 },
  { x: 5, y: 5 },
  { x: 6, y: 25 },
  { x: 7, y: 10 },
  { x: 8, y: 9 },
  { x: 9, y: 3 },
];

const MyLineGraph = () => (
  <XYPlot width={400} height={400}>
    <HorizontalGridLines />
    <VerticalGridLines />
    <LineSeries data={sampleGraphData} curve={null} opacity={1} />
    <XAxis title="X Axis - dates" />
    <YAxis title="Y Axis" />
  </XYPlot>
);

const MyAreaGraph = () => (
  <XYPlot width={400} height={400}>
    <HorizontalGridLines />
    <VerticalGridLines />
    <AreaSeries data={sampleGraphData} curve={null} opacity={1} />
    <XAxis title="X Axis - dates" />
    <YAxis title="Y Axis" />
  </XYPlot>
);

export default DashboardPage;
