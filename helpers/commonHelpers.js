const helpers = {
  response: (status, data, message) => {
    return {
      status: status,
      data: data,
      message: message,
    };
  },
};

export default helpers;
