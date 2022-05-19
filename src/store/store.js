export const store = {
  getOrder(storeId) {
    return JSON.parse(localStorage.getItem(storeId)) || {};
  },

  setOrder(storeId, order) {
    localStorage.setItem(storeId, JSON.stringify(order));
  }
};
