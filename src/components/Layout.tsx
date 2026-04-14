import { ReactNode } from "react";
import BottomNav from "./BottomNav";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pb-24">{children}</main>
      <BottomNav />
    </div>
  );
};

export default Layout;
