import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productSlice";
import { fetchCategories } from "../features/categorySlice";
import { addToCart } from "../features/cartSlice";
import { Link } from "react-router-dom";

function Products() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);
  const { list } = useSelector((state) => state.categories);

  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <div className="text-center mt-5">Loading...</div>;

  const filteredProducts = items.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = filterCategory === "all" ? true : p.category === filterCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-white">Products</h2>

   
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {list.map((c) => (
              <option key={c} value={c}>
                {c.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row">
        {filteredProducts.length === 0 ? (
          <div className="alert alert-warning">No products found</div>
        ) : (
          filteredProducts.map((p) => (
            <div className="col-md-3 mb-4" key={p.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={p.image}
                  className="card-img-top p-3"
                  alt={p.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h6 className="card-title">{p.title.slice(0, 20)}...</h6>
                  <p className="card-text fw-bold">₹{p.price}</p>
                  <button
                    className="btn btn-dark w-100 add"
                    onClick={() => dispatch(addToCart(p))}
                  >
                    Add to Cart
                  </button>
                   <Link to={`/products/${p.id}`} className="btn btn-outline-dark w-100 mt-2">
  View Details
</Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default Products;
