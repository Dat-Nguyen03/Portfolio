import React from "react";
import {} from "react-router-dom";
import { Layout, theme } from "antd";
import Aside from "../components/admin/Aside/Aside";
import AdminHeader from "../components/admin/Header/Header";
import { Outlet } from "react-router-dom";
const { Content } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="min-h-screen">
      <Aside />
      <Layout>
        <AdminHeader />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
