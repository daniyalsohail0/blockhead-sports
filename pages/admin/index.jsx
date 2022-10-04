import AsyncComponent from "../../utils/AsyncComponent";

const Admin = AsyncComponent(() => import("../../routes/Admin"));

const AdminPage = () => {
  return <Admin />;
};

export default AdminPage;