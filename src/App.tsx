import Layout from "@/components/layout";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Content from "@/components/layout/content";
import BackToTop from "@/components/back-to-top";

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
