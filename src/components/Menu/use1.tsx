import Menu from "./menu";
import SubMenu from "./submenu";
import MenuItem from "./menuitem";

const MenuCom = () => {
  const handleClick1 = (idx: string | number) => {
    console.log("click", idx);
  };
  return (
    <Menu
      mode="vertical"
      defaultIndex="0"
      onSelect={(idx) => handleClick1(idx)}
      defaultOpenSubMenus={["2"]}
    >
      <MenuItem>Tab1</MenuItem>
      <MenuItem disabled>Tab2</MenuItem>
      <SubMenu title="Tab3">
        <MenuItem>Tab3-1</MenuItem>
        <MenuItem>Tab3-2</MenuItem>
      </SubMenu>
    </Menu>
  );
};

export default MenuCom;
