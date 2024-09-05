import React from 'react';


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='text-white'>
        {/* Header */}
            <main>{children}</main>
        {/* Footer */}
    </div>
  );
}

export default Layout;
