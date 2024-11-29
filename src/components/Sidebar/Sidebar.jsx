import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import SidebarItem from "../SidebarItem/SidebarItem";
import ToggleButton from "../ToggleButton/ToggleButton";
import { SideBarWrapper, ItemGroup, ItemContent, RouteGroup } from "./styles";
import LogoWrapper from "../LogoWrapper/LogoWrapper";

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
];

const Sidebar = (props) => {
  const { color } = props;
  const [isOpened, setIsOpened] = useState(true);
  const [currentPath, setCurrentPath] = useState("/");

  const toggleSidebar = () => {
    setIsOpened((v) => !v);
  };

  return (
    <SideBarWrapper $color={color} isToggled={isOpened}>
      <ToggleButton color={color} isToggled={isOpened} onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isOpened ? "angle-left" : "angle-right"} />
      </ToggleButton>
      <LogoWrapper color={color}>
        <img src={logo} alt="TensorFlow logo" width={35} />
        <ItemContent isToggled={isOpened}>TensorFlow</ItemContent>
      </LogoWrapper>
      <RouteGroup>
        <ItemGroup>
          {routes.map((route) => (
            <SidebarItem
              color={color}
              isToggled={isOpened}
              selectedPath={currentPath}
              path={route.path}
              key={route.title}
              goToRoute={() => setCurrentPath(route.path)}
            >
              <FontAwesomeIcon icon={route.icon} />
              <ItemContent isToggled={isOpened}>{route.title}</ItemContent>
            </SidebarItem>
          ))}
        </ItemGroup>
        <ItemGroup>
          {bottomRoutes.map((route) => (
            <SidebarItem
              color={color}
              isToggled={isOpened}
              selectedPath={currentPath}
              path={route.path}
              key={route.title}
              goToRoute={() => setCurrentPath(route.path)}
            >
              <FontAwesomeIcon icon={route.icon} />
              <ItemContent isToggled={isOpened}>{route.title}</ItemContent>
            </SidebarItem>
          ))}
        </ItemGroup>
      </RouteGroup>
    </SideBarWrapper>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;
