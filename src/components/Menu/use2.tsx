import Menu from "./menu";
import SubMenu from "./submenu";
import MenuItem from "./menuitem";

const MenuCom = () => {
  const handleClick2 = (idx: string | number) => {
    console.log("click", idx);
  };
  return (
    <Menu
      defaultIndex="0"
      mode="horizontal"
      onSelect={(idx) => handleClick2(idx)}
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
