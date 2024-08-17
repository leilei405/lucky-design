import Menu from "./menu";
import MenuItem from "./menuitem";

const MenuCom = () => {
  return (
    <Menu defaultIndex="0">
      <MenuItem>menu1</MenuItem>
      <MenuItem>menu2</MenuItem>
      <MenuItem>menu3</MenuItem>
      <MenuItem>menu4</MenuItem>
    </Menu>
  );
};

export default MenuCom;
