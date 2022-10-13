import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Forms} from './Forms';
import {setUser} from 'store/slices/userSlice';

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/HomePage');
            })
            .catch(() => alert('Invalid user!'))
    }
    return (
        <Forms
            title={"sign in"}
            handleClick={handleLogin}
        />
    )
}

