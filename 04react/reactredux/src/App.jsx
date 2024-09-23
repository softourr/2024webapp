import React, { act } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

const initialData = {
  cart: [],
};

const reducer = (state = initialData, action) => {
  console.log(action);

  switch (action.type) {
    case "add_cart":
      return { ...state, cart: [...state.cart, action.payload] };
    case "remove_cart":
      return {
        ...state,
        cart: state.cart.filter((item) => action.payload !== item.id),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div>SHOP</div>
      <hr />
      <ProductList />
      <hr />
      <Cart />
    </Provider>
  );
}

const products = [
  {
    id: 1,
    name: "product1",
  },
  {
    id: 2,
    name: "product2",
  },
  {
    id: 3,
    name: "product3",
  },
  {
    id: 4,
    name: "product4",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch({ type: "add_cart", payload: item });
  };

  return (
    <>
      <div>
        {products.map((item, i) => {
          return (
            <div key={i}>
              {item.id} : {item.name}
              <button onClick={() => addCart(item)}>장바구니 추가</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeCart = (item) => {
    dispatch({ type: "remove_cart", payload: item });
  };

  return (
    <>
      <div>cart / 개수 : {cartItems.length}</div>
      <div>
        {cartItems.map((item, i) => {
          return (
            <div key={i}>
              장바구니 : {item.name}({item.id})
              <button
                onClick={() => {
                  removeCart(item.id);
                }}
              >
                장바구니 제거
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
