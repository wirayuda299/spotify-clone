import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
} from 'react';
import axios from 'axios';
const Context = createContext();

export const StateProvider = ({ children }) => {
  const [hide, setHide] = useState(true);
  const navbar = useRef(null);
  const [topChart, setTopChart] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggler = () => navbar.current.classList.toggle('hide');

  const options = {
    method: 'GET',
    url: 'https://shazam-core.p.rapidapi.com/v1/charts/country',
    params: { country_code: 'ID' },
    headers: {
      'X-RapidAPI-Key': '726fb68c91msh0b05395f57eb510p1ec3abjsna46e4ac27fa3',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
    },
  };

  useEffect(() => {
    try {
      const controller = new AbortController({ signal: options.signal });
      async function getTopChart() {
        const request = await axios.request(options);
        const response = await request.data;
        setTopChart(response);
        setLoading(false);
      }
      getTopChart();
      return () => {
        controller.abort();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Context.Provider value={{ hide, navbar, toggler, loading, topChart }}>
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
