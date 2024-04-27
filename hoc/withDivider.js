import { Divider } from "@mui/material";

const withDivider = (WrappedComponent) => {
  const HOCComponent = ({
    showDivider = false,
    position = "top",
    dividerProps,
    ...restProps
  }) => {
    return showDivider ? (
      <>
        {position === "top" && <Divider {...dividerProps} />}
        <WrappedComponent {...restProps} />
        {position === "bottom" && <Divider {...dividerProps} />}
      </>
    ) : (
      <WrappedComponent {...restProps} />
    );
  };

  return HOCComponent;
};

export default withDivider;
