import Client from "./AxiosClient";

const Http = {
  get: (url, header = {}, successCallback, errorCallback) => {
    Client.get(url, header)
      .then((res) => {
        if (successCallback != null) {
          successCallback(res);
        }
      })
      .catch((error) => {
        if (errorCallback != null) {
          errorCallback(error);
        }
      });
  },
  post: (url, data = {}, successCallback, errorCallback) => {
    Client.post(url, data)
      .then((res) => {
        if (successCallback != null) {
          successCallback(res);
        }
      })
      .catch((error) => {
        if (errorCallback != null) {
          errorCallback(error);
        }
      });
  },
};

export { Http };
