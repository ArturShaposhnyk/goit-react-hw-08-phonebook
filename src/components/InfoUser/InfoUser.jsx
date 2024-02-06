import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "Store/DataUser/userSelect";
import { logoutThunk } from "Store/DataUser/userThunk";
import css from './InfoUser.module.css'

const InfoUser = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    
    const handleSubmit = () => {
        dispatch(logoutThunk())
    };

    return (
        <div>
            {user && (
                <div className={css.Container}>
                    <Button onClick={handleSubmit}>Log Out</Button>
                </div>
            )}
        </div>
    )
}

export default InfoUser;