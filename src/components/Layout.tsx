import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import BackgroundEffect from './BackgroundEffect';
import { MANAGER_DEMO_MODE } from '../config/siteMode';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`relative min-h-screen bg-ink overflow-x-hidden ${MANAGER_DEMO_MODE ? '' : 'custom-cursor-enabled'}`}>
      <div className={MANAGER_DEMO_MODE ? 'hidden' : 'fixed bottom-12 right-12 z-[998] hidden xl:block'}>
        <div className="vertical-text text-[10px] uppercase tracking-[0.8em] text-ivory/40 font-bold select-none pointer-events-none">
          MODULAR SPACES — DESIGNED TO ADAPT
        </div>
      </div>

      <div className="grain" />
      <BackgroundEffect />
      {!MANAGER_DEMO_MODE && <CustomCursor />}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
