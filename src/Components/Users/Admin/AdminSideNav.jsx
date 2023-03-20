import {RxDashboard,RxChatBubble,RxDesktop} from 'react-icons/rx';
import {FaUsers,FaClipboardList} from 'react-icons/fa';
import {TfiAnnouncement} from 'react-icons/tfi';
import {VscFeedback} from 'react-icons/vsc';
import {FiLogOut} from 'react-icons/fi';
import AdminButton from './AdminButton'

export default function AdminSideNav(){
    return <div className="w-full h-screen bg-[#742BDA] float-left relative">
        <img src="DTCLogo.png" alt='Dan' className="md:w-4/5 lg:w-3/5 mx-auto my-4 "></img>
        <AdminButton icon=<RxDashboard className='text-white w-8 h-8'/> name='Dashboard'/>
        <AdminButton icon=<RxChatBubble className='text-white w-8 h-8'/> name='Message' />
        <AdminButton icon=<RxDesktop className='text-white w-8 h-8'/> name='Training'/>
        <AdminButton icon=<FaUsers className='text-[#742BDA] w-8 h-8'/> name='Member' />
        <AdminButton icon=<TfiAnnouncement className='text-white w-8 h-8'/> name='Announcement' />
        <AdminButton icon=<FaClipboardList className='text-white w-8 h-8'/> name='Report'/>
        <AdminButton icon=<VscFeedback className='text-white w-8 h-8'/> name='Feedback' />
        <div className='h-2'></div>
        <AdminButton icon=<FiLogOut className='text-white w-8 h-8'/> name='' />
    </div>

}