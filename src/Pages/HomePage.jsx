// bir context yapısına abone olmamızı sağlar
import { useContext } from "react";
//  2. adım abone olmak istediğimiz context'i cağırıcaz
import { ProdoctContext } from "../context/productContext";

import Loader from "../components/Loader";
import Card from "../components/Card";

const HomePage = () => {
  // context yapısında tutula bir veriye projedeki
  // bileşen içersinden erişmek istiyorsak bileşenden
  //  ilgili context yapısına abone oluruz
  const { products, category } = useContext(ProdoctContext);

  return (
    <div className="container">
      <h2 className="my-3">{category && category}</h2>
      <div className=" d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-4 my-5">
        {/* veriler gelmediyse yükleniyor göster */}
        {!products && <Loader />}

        {/* veriler geldiyse her biri çin ekrana kart bas */}
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
