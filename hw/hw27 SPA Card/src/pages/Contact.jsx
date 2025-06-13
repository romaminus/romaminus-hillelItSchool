import { useAuth } from '../context/AuthContext';

function Contacts() {
    const {user} = useAuth();
    return ( 
        <div className='container container-height d-flex flex-column justify-content-center align-items-center'>
            <h1 className="title">
                hi! {user?.name ? (`My name is ${user.name}`) : (`Dude `)}
            </h1>
            <p className="descr">
                there may be information about you here
            </p>
        </div>
     );
}

export default Contacts;