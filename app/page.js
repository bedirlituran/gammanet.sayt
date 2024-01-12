
import Xidmet from "@/components/Xidmet";
import Reklam from "@/components/Reklam";
import Carding from "@/components/Carding";
import WhatsAppButton from "@/components/Whatsapp";
import App from "@/components/App";



export default function Home() {
  return (
    <main>
      <App />
      <Carding />
      <Xidmet />
      <Reklam />
      <WhatsAppButton />
    </main>
  );
}
