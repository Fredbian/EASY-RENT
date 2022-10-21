import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Box,
  useColorModeValue,
} from "@chakra-ui/core";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

// import chakraUILight from "../assets/images/chakra-ui-light.png";
// import chakraUIDark from "../assets/images/chakra-ui-dark.png";

export default function Form() {
  const bgColor = useColorModeValue("gray.200", "gray.700");
//   const chakraUI = useColorModeValue(chakraUILight, chakraUIDark);
  return (
    <Box bgColor={bgColor} p={3} w="100%" boxShadow="lg" borderRadius="lg">
      <h2 className="title">LogIn & SignUp</h2>
      <Tabs isFitted>
        <TabList>
          <Tab _focus={{ boxShadow: "none" }}>Log In</Tab>
          <Tab _focus={{ boxShadow: "none" }}>Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <LoginForm />
          </TabPanel>
          <TabPanel>
            <SignupForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
