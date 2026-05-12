import BootstrapClient from "@/Components/Bootstrap/BootstrapClient";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/Components/Header/Header";
import "react-toastify/dist/ReactToastify.css";
import ToastContainer from "@/Components/Toastify/Toastify";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <BootstrapClient />
        <ToastContainer />
      </body>
    </html>
  );
}
