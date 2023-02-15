import NavComp from './loginHeader.js';
import BodyLogin from './loginBody.js';
import '../../css/login/login.css';

function loginComp(){
    return(
        <div>
                <NavComp></NavComp>
                <BodyLogin></BodyLogin>
        </div>
    );
}

export default loginComp;