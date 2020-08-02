import React from "react";
import { Box, Flex } from "../src/theme/emotion-styled-system";

function ThemeTest() {
  return (
    <Box>
      Mahin
      <Flex>
        <Box width={1 / 9} bg="#456" color="#fff">
          Block 1
        </Box>
        <Box width={1 / 9}>Block 2</Box>
        <Box width={1 / 9}>Block 3</Box>
        <Box width={1 / 9}>Block 4</Box>
        <Box width={1 / 9}>Block 5</Box>
        <Box width={1 / 9}>Block 6</Box>
        <Box width={1 / 9}>Block 7</Box>
        <Box width={1 / 9}>Block 8</Box>
      </Flex>
    </Box>
  );
}

export default {
  name: "Testing",
  component: ThemeTest,
  props: {},
};
