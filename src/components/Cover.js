import BottomMenu from './BottomMenu';
import './Cover.css';
import FunctionPurpose from './FunctionPurpose';
import TopMenu from './TopMenu';

function Cover() {
    return (
    <div className="Cover">
        <div className='top-menu-container'>
            <TopMenu prevPage={null} nextPage={<FunctionPurpose></FunctionPurpose>} arrowColor='' topMenuColor=''></TopMenu>
        </div>
        <div className="page">
        <h1 className='wvc'>WHOLE VIBE CATALOG</h1>
            <h2 className='access-to'>access to cools</h2>
            <div className="login">
                <div className="earth"></div>
            </div>
            <div>
                <h3>Spring 2024</h3>
                <h3>$0</h3>
            </div>
        </div>
        <div className='bottom-menu-container'>
            <BottomMenu prevPage={null} nextPage={<FunctionPurpose></FunctionPurpose>} arrowColor=''></BottomMenu>
        </div>
    </div>
  );
}

export default Cover;
