export const useStore = () => {
  const store = useState("store", () => "custom store");

  const updateStore = (val: string) => {
    store.value = val;
  };

  return { store, updateStore };
};
