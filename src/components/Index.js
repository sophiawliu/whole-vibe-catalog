import './Index.css';
import FunctionPurpose from './FunctionPurpose';
import 'reactjs-popup/dist/index.css';
import TopMenu from './menu/TopMenu';
import BottomMenu from './menu/BottomMenu';
import VibeCard from './index/VibeCard';

function Index({ userID }) {
    return (
        <div className="Index">
            <div className='top-menu-container'>
                <TopMenu prevPage={<FunctionPurpose></FunctionPurpose>} nextPage={null} arrowColor='black' topMenuColor='black' userID={userID}></TopMenu>
            </div>
            <div className='index-page'>
                <h1 className='page-title'>TABLE OF VIBES</h1>
                <div className='vibe-cards'>
                    <VibeCard></VibeCard>
                </div>
            </div>
            <div className='bottom-menu-container'>
                <BottomMenu userID={userID} prevPage={<FunctionPurpose></FunctionPurpose>} nextPage={null} arrowColor='black'></BottomMenu>
            </div>
        </div>
  );
}

export default Index;