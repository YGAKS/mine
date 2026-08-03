import './globals.css';

export const metadata = {
  title: 'Mineplix Studio',
  description: 'Create Your Design, Builds Your Minecraft Maps And Setups Your Server!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
