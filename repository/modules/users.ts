import type { FetchOptions } from "ofetch";
import type { AsyncDataOptions } from "#app";

import FetchFactory from "../factory";

interface IUser {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
}

class UserModule extends FetchFactory<IUser[]> {
  private RESOURCE = "/users";
  /**
   * Return the users as array
   * @param asyncDataOptions options for `useAsyncData`
   * @return
   */
  async getUsers(asyncDataOptions?: AsyncDataOptions<IUser[]>) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          "Accept-Language": "en-US",
        },
      };
      return this.call(
        "GET",
        `${this.RESOURCE}`,
        undefined, // body
        fetchOptions
      );
    }, asyncDataOptions);
  }
  async getUser(id: number, asyncDataOptions?: AsyncDataOptions<IUser>) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          "Accept-Language": "en-US",
        },
      };
      return this.call(
        "GET",
        `${this.RESOURCE}/${id}`,
        undefined, // body
        fetchOptions
      );
    }, asyncDataOptions);
  }
}

export default UserModule;
