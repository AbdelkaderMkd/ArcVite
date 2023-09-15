import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
export const Spinner = () => {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.7)", // Slightly white background
      }}
    >
      <Spin size="large" indicator={antIcon} />
    </div>
  );
};

export default Spinner;
