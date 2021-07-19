//import React from "react";
import React, { useEffect, useState } from "react";
import FormData from "./component/Form";
import TableData from "./component/TableData";

import Axios from "./axios";

//const API_KEY = "307f2146-e8ec-4535-877d-8dd0414e7764";

const setWaitCursor = () => {
  document.body.style.cursor = "wait";
};

const setDefaultCursor = () => {
  document.body.style.cursor = "default";
};

const Api = () => {
  const [loader, setLoader] = useState(false);
  const [counter, setCounter] = useState(0);
  const [userData, setUserData] = useState([]);

  const CreateNewBasket = (firstName, lastName) => {
    setLoader(true);
    Axios.get().then((res) => {
      let user = {
        username: firstName,
        lastname: lastName,
        age: 33,
      };
      Axios.post(`/basket/${res.data.baskets.length + 1}`, user).then((res) => {
        console.log(res);
        GetBasketData(true);
      });
    });
  };

  const GetBasketData = (reset = false) => {
    Axios.get()
      .then((res) => {
        console.log(res.data);
        let baskets = res.data.baskets;

        setCounter(baskets.length);
        reset && setUserData([]);

        for (let i = 0; i < baskets.length; i++) {
          Axios.get(`/basket/${baskets[i]}`)
            .then((resBasket) => {
              setUserData((arr) => [
                ...arr,
                { ...resBasket.data, basketId: baskets[i] },
              ]);
            })
            .catch((e) => {
              console.error(e);
            });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const deleteBasket = (basketId) => {
    setLoader(true);

    Axios.delete(`/basket/${basketId}`).then((res) => {
      console.log(res);
      GetBasketData(true);
    });
  };

  useEffect(() => {
    setLoader(true);
    GetBasketData();
  }, []);

  useEffect(() => {
    if (counter === userData.length) {
      setLoader(false);
    } else {
      setLoader(true);
    }
  }, [userData, counter]);

  return (
    <div className="container mt-8">
      <FormData CreateNewBasket={CreateNewBasket} />
      <hr />
      {loader ? (
        <div>Loading...</div>
      ) : (
        <TableData userData={userData} deleteBasket={deleteBasket} />
      )}

      {loader ? setWaitCursor() : setDefaultCursor()}
    </div>
  );
};

export default Api;
