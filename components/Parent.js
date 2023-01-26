import React from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import Link from "next/link"
  import { faCoffee, faIndustry, faPerson } from '@fortawesome/free-solid-svg-icons';

function parent({ children }) {
  return (
    <div className=" flex  justify-between gap-5">
      <div>
        <aside className="flex flex-col-1 p-6">
          <Link href="/">
            <div className="flex flex-row space-x-3 place-items-center">
              <FontAwesomeIcon
                style={{
                  height: 40,
                  width: 40,
                }}
                icon={faPerson}
                size="s"
                color="white"
              />
              <>Home</>
            </div>
          </Link>
          <Link href="/pos">
            <div className="flex flex-row space-x-3 place-items-center">
              <FontAwesomeIcon
                style={{
                  height: 40,
                  width: 40,
                }}
                icon={faCoffee}
                size="s"
                color="white"
              />
              <>POS</>
            </div>
          </Link>
          <div className="flex flex-row space-x-3 place-items-center">
            <FontAwesomeIcon
              style={{
                height: 40,
                width: 40,
              }}
              icon={faCoffee}
              size="xs"
              color="white"
            />
            <a>Products</a>
          </div>
          <div className="flex flex-row space-x-3 place-items-center">
            <FontAwesomeIcon
              style={{
                height: 40,
                width: 40,
              }}
              icon={faIndustry}
              size="xs"
              color="white"
            />
            <a>Suppliers</a>
          </div>
          <div className="flex flex-row space-x-3 place-items-center">
            <FontAwesomeIcon
              style={{
                height: 40,
                width: 40,
              }}
              icon={faCoffee}
              size="xs"
              color="white"
            />
            <a>Report</a>
          </div>
          <div className="flex flex-row space-x-3 place-items-center">
            <FontAwesomeIcon
              style={{
                height: 40,
                width: 40,
              }}
              icon={faCoffee}
              size="xs"
              color="white"
            />
            <a>Receivings</a>
          </div>
          <div className="flex flex-row space-x-3 place-items-center">
            <FontAwesomeIcon
              style={{
                height: 40,
                width: 40,
              }}
              icon={faCoffee}
              size="xs"
              color="white"
            />
            <a>Sale</a>
          </div>
          <div className="flex flex-row space-x-3 place-items-center">
            <FontAwesomeIcon
              style={{
                height: 40,
                width: 40,
              }}
              icon={faCoffee}
              size="xs"
              color="white"
            />
            <a>Employees</a>
          </div>
          <div className="flex flex-row space-x-3 place-items-center">
            <FontAwesomeIcon
              style={{
                height: 40,
                width: 40,
              }}
              icon={faCoffee}
              size="xs"
              color="white"
            />
            <a>Store Config</a>
          </div>
          <div className="flex flex-row space-x-3 place-items-center">
            <FontAwesomeIcon
              style={{
                height: 40,
                width: 40,
              }}
              icon={faCoffee}
              size="xs"
              color="white"
            />
            <a>Gift Cards</a>
          </div>
        </aside>
      </div>
      <div className=" order-2 ml-84, px-12, pt-30 py-6">{children}</div>
    </div>
  );
}

export default parent
