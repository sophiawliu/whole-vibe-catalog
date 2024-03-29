import './Index.css';
import FunctionPurpose from './FunctionPurpose';
import 'reactjs-popup/dist/index.css';
import TopMenu from './TopMenu';
import BottomMenu from './BottomMenu';

function Index() {
    return (
        <div className="Index">
            <div className='top-menu-container'>
                <TopMenu prevPage={<FunctionPurpose></FunctionPurpose>} nextPage={null} arrowColor='' topMenuColor='black'></TopMenu>
            </div>
            <div className='index-page'>
                <h1 className='page-title'>INDEX</h1>
                <div className='vibe-bar'>
                    <div className='vibe-title'>'80s On The Water</div>
                </div>
                <div className='vibe-bar'>
                    <div className='vibe-title'>Crybaby Greaser</div>
                </div>
                <div className='vibe-bar'>
                    <div className='vibe-title'>Womyn's Folk</div>
                </div>
                <div className='vibe-bar'>
                    <div className='vibe-title'>Austin Powers x '60s Mod</div>
                </div>
                <div className='vibe-bar'>
                    <div className='vibe-title'>PC Revolution</div>
                </div>
                <div className='vibe-bar'>
                    <div className='vibe-title'>Cowboy Western</div>
                </div>
            </div>
            <div className='bottom-menu-container'>
                <BottomMenu prevPage={<FunctionPurpose></FunctionPurpose>} nextPage={null} arrowColor=''></BottomMenu>
            </div>
        </div>
  );
}

export default Index;