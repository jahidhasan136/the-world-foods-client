import React, { Children } from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <div>
            <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive
                        ? "text-yellow-500"
                        : ""
                    }
                  >
                    {children}
                  </NavLink>
        </div>
    );
};

export default ActiveLink;