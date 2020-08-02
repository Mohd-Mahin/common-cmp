import styled from "@emotion/styled";
import { background, border, color, flexbox, layout, position, shadow, space, typography, } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";
var forwardProp = function (propName) { return shouldForwardProp(propName); };
var Base = styled("div", { shouldForwardProp: forwardProp })({
    fontsize: 14,
}, space, layout, flexbox, color, typography, background, border, position, shadow);
export var Box = styled(Base)({ display: "block" });
export var Flex = styled(Base)({ display: "flex" });
export var FlexWrap = styled(Base)({
    display: "flex",
    flexWrap: "wrap",
});
export var TInput = styled("input", { shouldForwardProp: forwardProp })({
    fontSize: 14,
    outline: "none",
}, space, color, typography, background, border, position, shadow);
export var Spacer = styled("div", { shouldForwardProp: forwardProp })(space);
export var TSelect = styled("select", {
    shouldForwardProp: forwardProp,
})({
    fontSize: 14,
    outline: "none",
    appearance: "none",
    backgroundColor: "white",
    backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e\")",
    backgroundPosition: "right 0px center",
    backgroundRepeat: "no-repeat",
}, space, color, typography, background, border, position, shadow);
