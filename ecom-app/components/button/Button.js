import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";

const App = ({ children, click }) => {
  return (
    <Space direction="vertical">
      <Space wrap>
        <Button type="primary" icon={<SearchOutlined />} onClick={click}>
          {children}
        </Button>
      </Space>
    </Space>
  );
};
export default App;
