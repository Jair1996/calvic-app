import { useEffect, useRef, useState } from "react";
import db from "../helpers/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const useGetProducts = (filter = { type: "featureProduct" }) => {
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });

    const citiesRef = collection(db, "products");

    let q;

    if (filter.type === "featureProduct") {
      q = query(citiesRef, where("featureProduct", "==", true));
    } else {
      q = query(
        citiesRef,
        where("category", "==", filter.payload.category),
        where("subcategory", "==", filter.payload.subcategory)
      );
    }

    const getProducts = async (q) => {
      try {
        const querySnapshot = await getDocs(q);
        let data = [];
        querySnapshot.forEach((doc) => {
          const product = {
            id: doc.id,
            product: doc.data(),
          };

          data = [...data, product];
        });

        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        } else {
          console.log("Set state no se llamo");
        }
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error: "No se pudo cargar la info",
        });
      }
    };

    getProducts(q);
  }, [filter.type, filter.payload.category, filter.payload.subcategory]);

  return state;
};
