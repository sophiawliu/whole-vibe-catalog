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
                <h1 className='page-title'>TABLE OF VIBES</h1>
                
            </div>
            <div className='bottom-menu-container'>
                <BottomMenu prevPage={<FunctionPurpose></FunctionPurpose>} nextPage={null} arrowColor='black'></BottomMenu>
            </div>
        </div>
  );
}

export default Index;