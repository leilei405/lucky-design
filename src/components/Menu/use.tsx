import Menu from "./menu";
import MenuItem from "./menuitem";

const MenuCom = () => {
  const handleClick = (idx: string | number) => {
    console.log("click", idx);
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Menu
        theme="light"
        mode="vertical"
        defaultIndex="0"
        onSelect={(idx) => handleClick(idx)}
      >
        <MenuItem activeKey={1}>Tab1</MenuItem>
        <MenuItem activeKey={2} disabled>
          Tab2
        </MenuItem>
        <MenuItem activeKey={3}>Tab3</MenuItem>
        <MenuItem activeKey={4}>Tab4</MenuItem>
      </Menu>

      <Menu theme="dark" defaultIndex="0" onSelect={(idx) => handleClick(idx)}>
        <MenuItem activeKey={1}>Tab1</MenuItem>
        <MenuItem activeKey={2} disabled>
          Tab2
        </MenuItem>
        <MenuItem activeKey={3}>Tab3</MenuItem>
        <MenuItem activeKey={4}>Tab4</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuCom;
