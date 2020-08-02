import styled from "@emotion/styled";
import {
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography,
} from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

const forwardProp = (propName: string) => shouldForwardProp(propName);

const Base: any = styled("div", { shouldForwardProp: forwardProp })(
  {
    fontsize: 14,
  },
  space,
  layout,
  flexbox,
  color,
  typography,
  background,
  border,
  position,
  shadow
);

export const Box: any = styled(Base)({ display: "block" });
export const Flex: any = styled(Base)({ display: "flex" });
export const FlexWrap: any = styled(Base)({
  display: "flex",
  flexWrap: "wrap",
});
export const TInput: any = styled("input", { shouldForwardProp: forwardProp })(
  {
    fontSize: 14,
    outline: "none",
  },
  space,
  color,
  typography,
  background,
  border,
  position,
  shadow
);

export const Spacer: any = styled("div", { shouldForwardProp: forwardProp })(
  space
);

export const TSelect: any = styled("select", {
  shouldForwardProp: forwardProp,
})(
  {
    fontSize: 14,
    outline: "none",
    appearance: "none",
    backgroundColor: "white",
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e")`,
    backgroundPosition: "right 0px center",
    backgroundRepeat: "no-repeat",
  },
  space,
  color,
  typography,
  background,
  border,
  position,
  shadow
);
