import Navbar from "./dashboard/components/Navbar";
import SideNav from "./dashboard/components/SideNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      <SideNav />
      {children}
    </main>
  );
}
