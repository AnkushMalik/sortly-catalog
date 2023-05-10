import Sidebar from './Sidebar/Sidebar'
import Container from './Container/Container'
import "./styles.scss"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar/>
      <Container/>
    </div>
  );
};

export default Dashboard;
