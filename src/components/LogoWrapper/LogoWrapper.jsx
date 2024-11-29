import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  gap: var(--sidebar-item-column-gap);
  color: ${({ $color }) => `var(--color-text-logo-${$color}-default)`};
`;

const LogoWrapper = ({ color, children }) => {
  return <Wrapper $color={color}>{children}</Wrapper>;
};

export default LogoWrapper;
