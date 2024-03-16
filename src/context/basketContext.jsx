import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";
import { createContext } from "react";
useLocalStorage;
export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);

  //   sepete ürün ekler
  const addToBasket = (newProduct) => {
    //1-bu üründen daha önce sepette varmı kontrol et
    const found = basket.find((i) => i.id === newProduct.id);
    if (found) {
      // 2- ürün sepette varsa ürünün miktarını 1 arttır
      // a-bulunan ürün miktarını 1 arttır

      const updated = { ...found, amount: found.amount + 1 };

      //   b-sepet dizisindeki eski ürünü yerine güncel hali koy
      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );
      //   c-state'i güncelleme
      setBasket(newBasket);
    } else {
      // 3- ürün sepette yokjsa ürünü sepete ekle (miktarı 1 eşitle)
      setBasket([...basket, { ...newProduct, amount: 1 }]);
    }
    console.log(basket);
  };

  // ürünü sepetten kaldır
  const removeFromBasket = (delete_id) => {
    // sepetteki ürünü bul
    const found = basket.find((i) => i.id === delete_id);

    if (found.amount > 1) {
      // miktarı 1 den fazlaysa miktarı 1 eksilticez
      const updated = { ...found, amount: found.amount - 1 };
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));
      setBasket(newBasket);
    } else {
      // eğerki miktarı 1 e eşitse o zaman ürünü kaldırıcaz
      const filtred = basket.filter((i) => i.id !== delete_id);
      setBasket(filtred);
    }
  };
  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
}
