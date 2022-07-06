export const getState = ({ setStore, getStore, getActions }) => {

    return {
      store: {
        heroesinfo: [],
        category: ""
      },
      actions: {
        setInfo: () => {
          fetch("http://localhost:8010/Heroes",{
            method: "GET",
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
          })
            .then((respuesta) => respuesta.json())
            .then((dato) => setStore({ heroesinfo: dato }))
            .catch((error) => console.error(error));
        },
        changecategory: (item) => {
            const store = getStore();
            setStore({category: store.category = item})
        }
      }
    };
  };