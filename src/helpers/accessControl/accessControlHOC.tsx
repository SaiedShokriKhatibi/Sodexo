import React, { FC, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from 'src/auth/context/authContext';
import { UserTypeId } from 'src/components/pagesCompenent/register/services/registerServices';
// import Link from 'next/link';

export function AccessControlHOC(Component: FC, userType: string) {
  const AccessControl: FC = () => {
    // const router = useRouter();
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

    }, [userData]);

    return (
      hasAccess ?
        <Component />
        :
        null // @todo show not found page
    )
  }

  return AccessControl;
}
