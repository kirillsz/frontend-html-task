import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.div`
  color: ${({ $color }) => `var(--color-text-${$color}-default)`};
  cursor: pointer;
  position: absolute;
  right: ${(props) => (props.isToggled ? "-1em" : "-2.5em")};
  top: 2em;
  font-size: 12px;
  display: inline-block;
  border-radius: 50%;
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: right var(--sidebar-transition);
  background: ${({ $color, $status }) =>
    `var(--color-button-background-${$color}-${$status})`};
`;

const ToggleButton = ({ color, isToggled, children, onClick }) => {
  const status = isToggled ? "active" : "default";
  return (
    <Button
      $color={color}
      isToggled={isToggled}
      $status={status}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
ToggleButton.propTypes = {
  color: PropTypes.string.isRequired,
  isToggled: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ToggleButton;
