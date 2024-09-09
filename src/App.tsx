import BackToTop from "@/components/back-to-top";
import Layout from "@/components/layout";
import Content from "@/components/layout/content";
import { ThemeProvider } from "@/components/theme/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Layout>
          <Content />
          <BackToTop />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
