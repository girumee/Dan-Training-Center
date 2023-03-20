import Announcement from "./pages/Announcement";
import Dashboard from "./pages/Dashboard";
import Feedback from "./pages/Feedback";
import Member from "./pages/Member";
import Message from "./pages/Message";
import Report from "./pages/Report";
import Training from "./pages/Training";
import {RxDashboard,RxChatBubble,RxDesktop} from 'react-icons/rx';
import {FaUsers,FaClipboardList} from 'react-icons/fa';
import {TfiAnnouncement} from 'react-icons/tfi';
import {VscFeedback} from 'react-icons/vsc';
import {FiLogOut} from 'react-icons/fi';
import AdminButton from './AdminButton'


export default function Admin(){
    let Page
    switch(window.location.pathname){
        case '/':
            Page = Dashboard
        break
        case '/Announcement':
            Page = Announcement
        break
        case '/Feedback':
            Page = Feedback
        break
        case '/Member':
            Page = Member
        break
        case '/Message':
            Page = Message
        break
        case '/Report':
            Page = Report
        break
        case '/Training':
            Page = Training
        break
        default:
            Page = Dashboard

    }


    console.log(Page.name)
    return <div className="w-screen h-screen grid grid-cols-8">
        {/* side nav */}
        <div className="w-full h-screen bg-[#742BDA] float-left relative">
        <img src="/assets/Admin/DTCLogo.png" alt='Dan' className="md:w-4/5 lg:w-3/5 mx-auto my-4 "></img>
        <a href="/"><AdminButton icon=<RxDashboard className={Page.name==='Dashboard'? 'text-[#742BDA] w-8 h-8':'text-white w-8 h-8'}/> name='Dashboard' bg={Page.name==='Dashboard'? 'white' : '[#742BDA]'}/></a>
        <a href="/Message"><AdminButton icon=<RxChatBubble className={Page.name=='Message'? 'text-[#742BDA] w-8 h-8':'text-white w-8 h-8'}/> name='Message' /></a>
        <a href="/Training"><AdminButton icon=<RxDesktop className={Page.name==='Training'? 'text-[#742BDA] w-8 h-8':'text-white w-8 h-8'}/> name='Training'/></a>
        <a href="/Member"><AdminButton icon=<FaUsers className={Page.name==='Member'? 'text-[#742BDA] w-8 h-8':'text-white w-8 h-8'}/> name='Member' /></a>
        <a href="/Announcement"><AdminButton icon=<TfiAnnouncement className={Page.name==='Announcement'? 'text-[#742BDA] w-8 h-8':'text-white w-8 h-8'}/> name='Announcement' /></a>
        <a href="/Report"><AdminButton icon=<FaClipboardList className={Page.name==='Report'? 'text-[#742BDA] w-8 h-8':'text-white w-8 h-8'}/> name='Report'/></a>
        <a href="/Feedback"><AdminButton icon=<VscFeedback className={Page.name==='Feedback'? 'text-[#742BDA] w-8 h-8':'text-white w-8 h-8'}/> name='Feedback' /></a>
        <div className='h-2'></div>
        <AdminButton icon=<FiLogOut className='text-white w-8 h-8'/> name='' />
    </div>
        <Page />
    </div>
}




 {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="Announcement" element={<Announcement />} />
          <Route path="Feedback" element={<Feedback />} />
          <Route path="Members" element={<Member />} />
          <Route path="Message" element={<Message />} />
          <Route path="Report" element={<Report />} />
          <Route path="Training" element={<Training />} />
        </Route>
      </Routes>
    </BrowserRouter> */}