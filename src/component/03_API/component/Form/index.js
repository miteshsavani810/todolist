import React, { useEffect, useRef, useState } from "react";

const FormData = ({ CreateNewBasket }) => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  const refUsername = useRef(null);

  const submitData = (e) => {
    e.preventDefault();

    if (firstName !== "" || secondName !== "") {
      CreateNewBasket(firstName, secondName);
      setFirstName("");
      setSecondName("");

      refUsername.current.focus();
    }
  };

  const updateSecondName = (e) => {
    setSecondName(e.target.value);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  useEffect(() => {
    refUsername.current.focus();
  }, []);

  return (
    <div className="container">
      <div className="row mt-3">
        <form onSubmit={submitData}>
          <div className="form-group mb-3">
            <label htmlFor="exampleInputUsername" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUsername"
              placeholder="First name"
              value={firstName}
              onChange={updateFirstName}
              ref={refUsername}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="exampleInputSurname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputSurname"
              placeholder="last name"
              value={secondName}
              onChange={updateSecondName}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormData;
