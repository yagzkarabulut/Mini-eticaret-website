import axios from "axios";
import { createContext, useEffect, useState } from "react";

// ! contextin temelini oluştumra
export const ProdoctContext = createContext();

// ! sağlayıcı ve onun tuttuğu verileri tanımlama

export function ProductProvider({ children }) {
  const [products, setProduckts] = useState(null);
  const [category, setCategory] = useState("all");
  useEffect(() => {
    // önceki ürünleri kaldır bunu yapmamız sayesinde yükleniyot efekti tetikliyor.
    setProduckts(null);
    // hangi url istek atılacağını belirle
    const url =
      category === "all"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${category}`;
    axios.get(url).then((res) => setProduckts(res.data));
  }, [category]);
  //  context yapısında tutuğumuz verileri bileşenlere sağlamak
  //  value olarak eklenen veriler bütün projedeki bileşenler
  //  tarafından erişilebilir olur.
  return (
    <ProdoctContext.Provider value={{ products, category, setCategory }}>
      {children}
    </ProdoctContext.Provider>
  );
}
