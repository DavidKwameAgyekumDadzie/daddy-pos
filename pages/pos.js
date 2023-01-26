import React, { useState, useRef } from 'react'
import Parent from "../components/Parent"
import { useReactToPrint } from 'react-to-print'
import { ComponentToPrint} from '../components/componentsToPrint'



const products= [
  {
    id: 5,
    name: 'bel aqua',
    price: 32
  },
  {
    id: 5,
    name: 'bel malt',
    price: 32
  },
  {
    id: 5,
    name: 'voltic',
    price: 32
  },
  {
    id: 5,
    name: 'fanta',
    price: 32
  },
  {
    id: 5,
    name: 'sprite',
    price: 32
  },
  {
    id: 5,
    name: 'bel cola',
    price: 32
  },
]
let productList = []

function pos() {

  const [currentProduct, setCurrentProduct] = useState()
  const [productName, setProductName] = useState()
  const [productQuantity, setProductQuantity] = useState()
  const [multiplied, setMultiplied] = useState(0)
  const [TotalPrice, setTotalPrice] = useState(multiplied)
  const [TotalAmount, setTotalAmount] = useState(multiplied)

  function productListing(datas) {
    productList.push(datas)
    setCurrentProduct(productList)
    console.log(productList);
    setMultiplied(datas.price * datas.quantity)
    setTotalAmount(TotalAmount + multiplied)
    // setCurrentProductPrice(datas.price)
    // setTotalPrice(productPrice * productQuantity);
    // console.log(multiplied);
  };

  const componentRef = useRef();
  const handlePrinting = useReactToPrint({
      content: () => componentRef.current,
  });

  function removeProduct(productName){
    productList = productList.filter(({ name })=> name !== productName)

  }

  return (
    <Parent>
      <div className="flex flex-row space-x-8 place-items-center">
        {/* <div>
          <h1 className="text-3xl font-bold">Delete</h1>
          <input
            className="mt-4 text-2x p-4 rounded-xl border-2 border-slate"
            
            type="text"
          />
        </div> */}
        {/* <div>
          <h1 className="text-3xl font-bold">Item #</h1>
          <input
            className="mt-4 text-2x p-4 rounded-xl border-2 border-slate"
            placeholder="Item number"
            type="number"
          />
        </div> */}
        <div>
          <div className='invisible absolute'>
            <ComponentToPrint props={productList} ref={componentRef}/>
          </div>
          <h1 className="text-3xl font-bold">Product Name</h1>
          <input
            onChange={(e) => setProductName(e.target.value)}
            list="products"
            className="mt-4 text-2x p-4 rounded-xl border-2 border-slate"
            placeholder="Type Product Name"
            type="text"
          />
          <datalist id="products">
            {products.map((product, index) => (
              <option key={index} value={product.name}>
                {product.name}
              </option>
            ))}
          </datalist>
        </div>
        {/* <div>
          <h1 className="text-3xl font-bold">Price</h1>
          <input
            className="mt-4 text-2x p-4 rounded-xl border-2 border-slate"
            type="number"
          />
        </div> */}
        <div>
          <h1 className="text-3xl font-bold">Qty</h1>
          <input
            onChange={(e) => setProductQuantity(e.target.value)}
            className="mt-4 text-2x p-4 rounded-xl border-2 border-slate"
            placeholder="Inset Quantity"
            type="number"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Customer Name</h1>
          <input
            className="mt-4 text-2x p-4 rounded-xl border-2 border-slate"
            placeholder="Enter customer name"
            type="text"
          />
        </div>
      </div>
      <div>
        <button
          onClick={() =>
            productListing({
              id: Date.now(),
              name: productName,
              quantity: productQuantity,
              price: products.find(({ name }) => name == productName).price,
              // totalPrice: products.multiply(({ name }) => name == productName)
              //   .totalPrice,
            })
          }
          className="bg-slate-900 hover:bg-sky-600 text-white mt-4 p-4 text-2xl font-bold rounded-xl"
        >
          Add
        </button>
      </div>

      {productList.map((product, index) => (
        <div key={index}>
          <div className="bg-slate-900 justify-between flex flex-row place-items-center p-6 mt-4 rounded-xl">
            <div>
              <h1 className="text-3xl text-white font-bold">Product</h1>
              <h1 className="text-2xl text-white ">{product.name}</h1>
            </div>
            <div>
              <h1 className="text-3xl text-white font-bold">Qty</h1>
              <h1 className="text-2xl text-white ">{product.quantity}</h1>
            </div>
            <div>
              <h1 className="text-3xl text-white font-bold">Unit Price</h1>
              <h1 className="text-2xl text-white ">{product.price}</h1>
            </div>
            <div>
              <h1 className="text-3xl text-white font-bold">Total Price</h1>
              <h1 className="text-2xl text-white ">{TotalPrice}</h1>
            </div>
            <div>
              <button onClick={()=>removeProduct(product.name)} className="hover:bg-red-600 bg-slate-900 text-white p-4 mt-4 text-2xl font-bold rounded-xl">
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <div>
        <div className="bg-slate-900 justify-between flex flex-row place-item-center p-6  rounded-xl mt-10">
          <div>
            <h1 className="text-3xl text-white font-bold">Total Amount</h1>
            <h1 className="text-2xl text-white ">{TotalAmount}</h1>
          </div>
          <div>
            <button onClick={()=> handlePrinting()} className="bg-slate-900 hover:bg-green-600 text-white p-4 mt-4 text-2xl font-bold rounded-xl hover: ">
              Print
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </Parent>
  );
}

export default pos
