import { useMemo, useState } from "react";

export default function DemoHookMemo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const total = useMemo(() => {
    return products.reduce((sum, product) => {
      return sum + product.price;
    }, 0);
  }, [products]);

  const handleSubmit = (e) => {
    if (name?.length > 0 && price > 0) {
      setProducts([
        ...products,
        {
          name,
          price: +price,
        },
      ]);
    }
  };

  return (
    <div>
      <h1>Demo hook useMemo()</h1>
      <ul>
        <li>useMemo(): avoid running a function unnecessarily </li>
      </ul>

      <div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Input the product name"
        />
      </div>

      <div>
        <input
          type="number"
          min="0"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Input the price"
        />
      </div>

      <div>
        <button type="submit" onClick={handleSubmit}>
          Add to Cart
        </button>
      </div>

      <p>Total: {total}</p>

      {products?.length > 0 && (
        <div>
          <p>Products:</p>
          <ul>
            {products &&
              products.map(({ name, price }) => {
                return (
                  <li key={name}>
                    {name}: {price}$
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
}
