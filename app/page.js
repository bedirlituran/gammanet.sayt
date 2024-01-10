
import MainImage from "@/components/MainImage";
import Xidmet from "@/components/Xidmet";
import Reklam from "@/components/Reklam";
import Carding from "@/components/Carding";
import WhatsAppButton from "@/components/Whatsapp";



export default function Home() {
  return (
    <main>
      <MainImage />
      <Carding />
      <Xidmet />
      <Reklam />
      <WhatsAppButton />
    </main>
  );
}
