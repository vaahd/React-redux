import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../features/cartSlice";

function Cart() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce((a, i) => a + i.price * i.quantity, 0);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Shopping Cart</h2>

      {items.length === 0 ? (
        <div className="alert alert-warning">Your cart is empty</div>
      ) : (
        <>
          <div className="list-group mb-3">
            {items.map((i) => (
              <div
                key={i.id}
                className="list-group-item contain">
                <div className="row align-items-center g-2">
                  <div className="col-12 col-sm-3 col-md-2 text-center">
                    <img
                      src={i.image}
                      alt={i.title}
                      className="img-fluid"
                      style={{ maxHeight: "100px", objectFit: "contain" }}
                    />
                  </div>

                 
                  <div className="col-12 col-sm-5 col-md-6 text-center text-sm-start">
                    <p className="mb-1 fw-bold">{i.title}</p>
                    <small className="text-muted">Qty: {i.quantity}</small>
                  </div>

               
                  <div className="col-12 col-sm-4 col-md-4 text-center text-sm-end">
                    <span className="me-3 fw-bold d-block d-sm-inline">
                      ₹{(i.price * i.quantity).toFixed(2)}
                    </span>
                    <button
                      className="btn btn-sm btn-danger mt-sm-0"
                      onClick={() => dispatch(removeFromCart(i.id))}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
</svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
            <h4 className="mb-2 mb-sm-0">Total: ₹{total.toFixed(2)}</h4>
            <button
              className="btn btn-secondary clear"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
