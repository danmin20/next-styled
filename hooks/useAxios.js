import defaultAxios from "axios";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useStste({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);
  if (!opts.url) {
    return;
  }
  const refetch = () => {
      setState({
          ...state,
          loading: true
      })
      setTrigger(new Date.now());
  }
  useEffect(() => {
    axiosInstance(opts)
      .then(data => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch(error => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return {...state, refetch}
};

export default useAxios;
