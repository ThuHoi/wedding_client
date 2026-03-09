import MusicPlayer from "./component/MusicPlayer"
import LanguageSwitcher from "./component/LanguageSwitcher"
import BannerSection from "./component/BannerSection"
import ScheduleSection from "./component/ScheduleSection"
import InvitationSection from "./component/InvitationSection"
import CoupleSection from "./component/CoupleSection"
import CountdownSection from "./component/CountdownSection"
// import EventSection from "./component/EventSection"
import ContactSection from "./component/ContactSection"
import GallerySection from "./component/GallerySection"
import GiftSection from "./component/GiftSection"

function App() {
    return (
        <div className="page-wrapper">
            <LanguageSwitcher/>
            <MusicPlayer/>
            <BannerSection/>
            {/* <ScheduleSection/> */}
            <InvitationSection/>
            <CoupleSection/>
            <CountdownSection/>
            {/* <EventSection/> */}
            <ContactSection/>
            <GallerySection/>
            <GiftSection/>
        </div>
    );
}

export default App;
