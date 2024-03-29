import './Cover.css';
import FunctionPurpose from './FunctionPurpose';
import Menu from './Menu';

function Cover() {
    return (
    <div className="Cover">
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
        <Menu prevPage={null} nextPage={<FunctionPurpose></FunctionPurpose>} topMenuColor='' arrowColor=''></Menu>
    </div>
  );
}

export default Cover;
