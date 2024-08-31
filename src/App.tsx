import Layout from "@/components/layout";
import { ThemeProvider } from "@/components/theme/theme-provider";
import GridBackground from "./components/theme/grid-background";
import Container from "./components/layout/container";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <GridBackground>
          <Container classes="px-40">
            <Layout />
          </Container>
        </GridBackground>
      </ThemeProvider>
    </>
  );
}

export default App;
