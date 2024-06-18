import BottomMenu from './menu/BottomMenu';
import './Cover.css';
import FunctionPurpose from './FunctionPurpose';
import TopMenu from './menu/TopMenu';
import Username from './menu/Username';

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
            <div className='month-price'>
                <Username></Username>
            </div>
        </div>
        <div className='bottom-menu-container'>
            <BottomMenu prevPage={null} nextPage={<FunctionPurpose></FunctionPurpose>} arrowColor=''></BottomMenu>
        </div>
    </div>
  );
}

export default Cover;
