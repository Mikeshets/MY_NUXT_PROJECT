import { $fetch, type FetchOptions } from "ofetch";

// locals
import ProductsModule from "~/repository/modules/products";
import UserModule from "~/repository/modules/users";

interface IApiInstance {
  products: ProductsModule;
  users: UserModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const fetchOptions: FetchOptions = {
    baseURL: config.public.apiBaseUrl,
  };

  // Create a new instance of $fecther with custom option
  const apiFecther = $fetch.create(fetchOptions);

  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    products: new ProductsModule(apiFecther),
    users: new UserModule(apiFecther),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
