import React from 'react';
import { useDispatch } from 'react-redux';
import { setLoading as setLoadingAction, setUser } from 'ducks/actions';
import { Button } from 'components/buttons/Button';
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
        <section className={cn.graph_section}>
          <div>Welcome to the Dashboard page</div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
