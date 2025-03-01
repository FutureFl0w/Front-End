import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login - Future Flow",
  description: "Login page for Future Flow",
};

export default function LoginPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/backgrounds/login.svg')" }}
    >
      <div className="w-full max-w-xs text-center px-4">
        {/* Logo placed above the main text */}
        <Image
          src="/icons/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="mx-auto mb-4"
        />
        <h1 className="text-white text-3xl font-bold mb-4">
          ¡Bienvenido a{" "}
          <span className="italic text-[#80F8FE]">SOMOS!</span>
        </h1>
        <p className="text-white text-base mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque ac faucibus augue, sed consectetur velit.
        </p>
        <Link
          href="/profile"
          className="flex items-center justify-center w-full bg-white text-gray-700 font-medium py-2 rounded-md shadow cursor-pointer transition-transform duration-200 hover:scale-105 hover:bg-gray-100 mb-4"
        >
          <Image
            src="/icons/google.svg"
            alt="Google icon"
            className="w-5 h-5 mr-2"
            width={20}
            height={20}
          />
          <span>Continuar con Google</span>
        </Link>
        <p className="mt-4 text-xs text-white">
          Al iniciar sesión, aceptas nuestros{" "}
          <Link href="/legal-requirements" className="underline font-bold">
            Términos de Privacidad
          </Link>
        </p>
      </div>
    </div>
  );
}
