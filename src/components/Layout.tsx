import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundEffect from './BackgroundEffect';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-ink overflow-x-hidden">
      <div className="hidden">
        <div className="vertical-text text-[10px] uppercase tracking-[0.8em] text-ivory/40 font-bold select-none pointer-events-none">
          AURELIAN — ARCHITECTURAL EXCELLENCE
        </div>
      </div>

      <div className="grain" />
      <BackgroundEffect />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
