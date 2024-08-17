import Menu from "./menu";
import MenuItem from "./menuitem";

const MenuCom = () => {
  const handleClick = (idx: string | number) => {
    console.log("click", idx);
  };
  return (
    <Menu defaultIndex="0" onSelect={(idx) => handleClick(idx)}>
      <MenuItem activeKey={1}>menu1</MenuItem>
      <MenuItem activeKey={2} disabled>
        menu2
      </MenuItem>
      <MenuItem activeKey={3}>menu3</MenuItem>
      <MenuItem activeKey={4}>menu4</MenuItem>
    </Menu>
  );
};

export default MenuCom;
