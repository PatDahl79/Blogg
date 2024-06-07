import React, { useState } from 'react';

const InPageNavigation = ({ routes, defaultHidden, children }) => {
  const [activeTab, setActiveTab] = useState(routes[0]);

  const handleTabClick = (route) => {
    setActiveTab(route);
  };

  return (
    <div>
      <nav>
        <ul className="flex space-x-4">
          {routes.map((route, index) => (
            <li key={index}>
              <button
                className={`px-4 py-2 ${activeTab === route ? 'font-bold' : ''}`}
                onClick={() => handleTabClick(route)}
              >
                {route}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        {React.Children.map(children, (child, index) => {
          // Check if the child is the active tab or is not in the defaultHidden list
          if (activeTab === routes[index] || !defaultHidden.includes(routes[index])) {
            return child;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default InPageNavigation;
