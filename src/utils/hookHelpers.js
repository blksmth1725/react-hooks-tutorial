import { useState, useEffect } from "react";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};

export const useFetchFact = (url) => {
  const [state, setState] = useState({ data: null, loading: false });
  useEffect(() => {
    setState({ data: null, laoding: false });
    fetch(url)
      .then((res) => res.text())
      .then((y) => {
        console.log(y);
        setState({ data: y, laoding: true });
      });
  }, [url]);
  return state;
};
