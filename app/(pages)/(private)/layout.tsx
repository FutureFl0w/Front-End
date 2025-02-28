import Footer from "@/app/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <header className="bg-[#1A2D47] text-white p-4">
        <h1 className="text-lg font-bold">Hola, Javier Cader</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-white text-black">{children}</main>

      {/* Footer (client component) */}
      <Footer />
    </div>
  );
}
