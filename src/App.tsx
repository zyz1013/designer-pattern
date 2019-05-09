import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./App.css";
import DesignerPattern from "./DesignerPattern";
import ReduxTodoDemo from "./ReduxTodoDemo";
const { Header } = Layout;
class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout style={{ height: "100%" }}>
          <Header className="header">
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["designer"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="designer">
                <Link to="/designer">设计者模式</Link>
              </Menu.Item>
              <Menu.Item key="reduxTodoDemo">
                <Link to="/reduxTodoDemo">Todo</Link>
              </Menu.Item>
              {/* <Menu.Item key="reactTool">
                <Link to="/reactTool">chrome/react插件</Link>
              </Menu.Item> */}
            </Menu>
          </Header>
          <Layout>
            <Route path="/designer" component={DesignerPattern} />
            <Route path="/reduxTodoDemo" component={ReduxTodoDemo} />
          </Layout>
        </Layout>
      </Router>
    );
  }
}
export default App;
