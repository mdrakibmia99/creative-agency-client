import axios from 'axios';
import { useEffect, useState } from 'react';

function useAuthenticate(user) {
    const [token, setToken] = useState('');
    useEffect(() => {
        console.log(user);
        const email = user?.user?.email;

        if (email) {
            const name = user?.user?.displayName;

            const { data } = axios.put(`http://localhost:5000/user/${email}`, { name, email });
            console.log(data);

            if (name) {
                const accessToken = JSON.stringify(user?.user?.accessToken)
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            }
        }
    }, [user]);

    return [token];
}

export default useAuthenticate;