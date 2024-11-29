import styled from "styled-components";

const ItemGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ItemContent = styled.span`
  overflow: hidden;
  transition: all var(--sidebar-transition);
  width: ${(props) => (props.isToggled ? "100%" : "0")};
  opacity: ${(props) => (props.isToggled ? "1" : "0")};
`;

const RouteGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 140px;
`;

const SideBarWrapper = styled.div`
  outline: 1.5px solid grey;
  position: relative;
  border-radius: 8px;
  padding: 1rem;
  width: ${(props) => (props.isToggled ? "10rem" : "2.5rem")};
  transition: width var(--sidebar-transition);
  background: ${({ $color }) =>
    `var(--color-sidebar-background-${$color}-default)`};
`;

export { ItemGroup, SideBarWrapper, ItemContent, RouteGroup };
