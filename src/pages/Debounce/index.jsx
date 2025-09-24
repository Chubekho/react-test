import { useEffect, useState } from "react";
import styles from "./Debounce.module.scss";
import useDebounce from "../../hook/useDebounce";

function Debounce() {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const keyword = useDebounce(searchValue, 1000);

  useEffect(() => {
    fetch(`https://api01.f8team.dev/api/products`)
      .then((res) => res.json())
      .then((result) => setProducts(result.data.items));
  }, []);

  useEffect(() => {
    if (!keyword) return;

    fetch(`https://api01.f8team.dev/api/products?q=${keyword}`)
      .then((res) => res.json())
      .then((result) => setProducts(result.data.items));
  }, [keyword]);

  return (
    <div className={styles.wrapper}>
      <h3>Debounce demo</h3>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.id}. {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Debounce;
