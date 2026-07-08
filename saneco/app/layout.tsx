import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Serviambientales de Nariño',
  description: 'Fumigación y gestión ambiental en Nariño',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}