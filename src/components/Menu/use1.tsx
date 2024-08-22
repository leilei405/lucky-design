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
      defaultOpenSubMenus={["3"]}
    >
      <MenuItem>Tab1</MenuItem>
      <MenuItem disabled>Tab2</MenuItem>
      <SubMenu title="select">
        <MenuItem>Tab3</MenuItem>
        <MenuItem>Tab4</MenuItem>
      </SubMenu>
    </Menu>
  );
};

export default MenuCom;
