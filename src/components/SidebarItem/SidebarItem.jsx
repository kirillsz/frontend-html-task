import styled from "styled-components";
import PropTypes from "prop-types";
const ItemWrapper = styled.div`
  min-height: 1.5em;
  display: flex;
  align-items: center;
  gap: ${({ isToggled }) =>
    isToggled ? "var(--sidebar-item-column-gap)" : "0"};
  cursor: pointer;
  border-radius: 12px;
  justify-content: ${({ isToggled }) => (isToggled ? "start" : "center")};
  color: ${({ $color, $status }) => `var(--color-text-${$color}-${$status})`};
  padding: 0.25rem 0.6rem;
  transition: all var(--sidebar-transition);
  background: ${({ $color, $status }) =>
    `var(--color-sidebar-background-${$color}-${$status})`};

  &:hover {
    color: ${({ $color }) => `var(--color-text-${$color}-hover)`};
    background: ${({ $color }) =>
      `var(--color-sidebar-background-${$color}-hover)`};
  }
`;

const SidebarItem = ({
  color,
  isToggled,
  selectedPath,
  path,
  goToRoute,
  children,
}) => {
  const status = path === selectedPath ? "active" : "default";
  return (
    <ItemWrapper
      $color={color}
      $status={status}
      isToggled={isToggled}
      onClick={() => {
        goToRoute(path);
      }}
    >
      {children}
    </ItemWrapper>
  );
};
SidebarItem.propTypes = {
  color: PropTypes.string.isRequired,
  isToggled: PropTypes.bool.isRequired,
  selectedPath: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  goToRoute: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default SidebarItem;
