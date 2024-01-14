
import Xidmet from "@/components/Xidmet";
import Reklam from "@/components/Reklam";
import Carding from "@/components/Carding";
import WhatsAppButton from "@/components/Whatsapp";
import ChannelList from "@/components/ChannelList";


export default function Home() {
  return (
    <main>
      <ChannelList/>
      <Carding />
      <Xidmet />
      <Reklam />
      <WhatsAppButton />
    </main>
  );
}
