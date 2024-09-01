import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="grid-background relative">
        <Header />
        {children}
      </main>
    </>
  );
}
