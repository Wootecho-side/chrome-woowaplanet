import type { Meta, StoryObj } from "@storybook/react-vite";
import OrbitalMoving from "../../components/OrbitalMoving/OrbitalMoving";
import Satellite from "../../components/Satellite/Satellite";

const meta: Meta<typeof OrbitalMoving> = {
  title: "Components/OrbitalMoving",
  component: OrbitalMoving,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    center: { x: 450, y: 150 },
    radius: { x: 150, y: 50 },
    children: <Satellite name="tomato" size={50} />,
    speed: 100,
    initialAngle: 0,
    initialOrbitRotationAngle: 0,
    orbitRotationSpeed: 5,
  },
};

export const Demo: Story = {
  render: () => {
    return (
      <>
        <OrbitalMoving
          center={{ x: 300, y: 200, zIndex: 100 }}
          radius={{ x: 150, y: 40 }}
          speed={200}
          initialAngle={0}
          initialOrbitRotationAngle={-30}
        >
          <Satellite name="flamingo" size={50} />
        </OrbitalMoving>
        <div
          style={{
            position: "absolute",
            left: "300px",
            top: "200px",
            width: 200,
            height: 200,
            transform: "translate(-50%, -50%)",
            background: "#ffd966",
            borderRadius: "50%",
            zIndex: 100,
          }}
        />
      </>
    );
  },
};
