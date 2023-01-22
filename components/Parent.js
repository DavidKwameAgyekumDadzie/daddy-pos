import React from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faBottleWater, faCoffee } from '@fortawesome/free-solid-svg-icons';

function parent({ children }) {
  return (
    <div>
      <aside>
        <div>
          <FontAwesomeIcon icon={faCoffee} size="s" color="white" />
          <a>Customers</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faCoffee} size="s" color="white" />
          <a>Products</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faCoffee} size="xs" color="white" />
          <a>Item Kits</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faCoffee} size="xs" color="white" />
          <a>Suppliers</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faCoffee} size="xs" color="white" />
          <a>Report</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faCoffee} size="xs" color="white" />
          <a>Receivings</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faCoffee} size="xs" color="white" />
          <a>Sale</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faCoffee} size="xs" color="white" />
          <a>Employees</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faCoffee} size="xs" color="white" />
          <a>Store Config</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faCoffee} size="xs" color="white" />
          <a>Gift Cards</a>
        </div>
      </aside>
      <div>{children}</div>
    </div>
  );
}

export default parent
