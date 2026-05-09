import BootstrapClient from "@/Components/Bootstrap/BootstrapClient";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/Components/Header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
