import * as React from "react";
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ColorModeSwitcher from "./ColorModeSwitcher";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />

      <App />
    </ChakraProvider>
  </React.StrictMode>
);
