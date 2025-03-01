import Footer from "@/app/components/Footer";
import HamburgerMenu from "@/app/components/HamburgerMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar (sticky) */}
      <header className="sticky top-0 z-50 bg-[#1A2D47] text-white p-4 flex items-center justify-between">
        <h1 className="text-lg font-bold">Hola, Usuario</h1>
        <HamburgerMenu />
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-white text-black">{children}</main>

      {/* Footer */}
      <div className="sticky bottom-0 z-50">
        <Footer />
      </div>
    </div>
  );
}
