import Menu from "./menu";
import SubMenu from "./submenu";
import MenuItem from "./menuitem";

const MenuCom = () => {
  const handleClick1 = (idx: string | number) => {
    console.log("click", idx);
  };
  const handleClick2 = (idx: string | number) => {
    console.log("click", idx);
  };
  return (
    <Menu
      mode="vertical"
      defaultIndex="0"
      onSelect={(idx) => handleClick1(idx)}
    >
      <MenuItem activeKey={1}>Tab1</MenuItem>
      <MenuItem activeKey={2} disabled>
        Tab2
      </MenuItem>
      <SubMenu title="select">
        <MenuItem activeKey={3}>Tab3</MenuItem>
        <MenuItem activeKey={4}>Tab4</MenuItem>
      </SubMenu>
    </Menu>
  );
};

export default MenuCom;
