import { useDispatch, useSelector } from 'react-redux';
import { toggleAuthenticationContainer } from '../../store/actions/adminActions';
import { userIdStateSelector } from '../../store/storeUtilities';

export const useAuthenticateToggle = () => {
  const userId = useSelector(userIdStateSelector);
  const dispatch = useDispatch();
  if (!userId) {
    dispatch(toggleAuthenticationContainer(true));
  }
};

export const useAuthenicateAndReturnUserId: () => string = () => {
  const userId = useSelector(userIdStateSelector);
  const dispatch = useDispatch();
  if (!userId) {
    dispatch(toggleAuthenticationContainer(true));
  }
  return userId;
};
