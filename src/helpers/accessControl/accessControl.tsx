import React, { FC, useContext, useState, useEffect } from 'react';
import { AuthContext } from 'src/auth/context/authContext';
import { UserTypeId } from 'src/components/pagesCompenent/register/services/registerServices';

interface IProps {
  children: any;
  userType: string;
}
const AccessControl: FC<IProps> = ({ children, userType }) => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState<any>(null);
  const [hasAccess, setHasAccess] = useState<boolean>(false);

  useEffect(() => {
    setUserData(user);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (userData?.userType?.id === UserTypeId[userType]) {
      setHasAccess(true);
    } else {
      setHasAccess(false);
    }

  }, [userData, userType]);

  return (
    hasAccess ?
      children
      :
      null
  )
}

export default AccessControl;