// @ts-check

/**
 * @typedef {{loggedIn: Boolean, name?: String, email?: String}} State
 */

/**
 * @type {State}
 */
const state = {
  loggedIn: true,
  name: null,
  email: null,
};

const mutations = {
  /**
   *
   * @param {State} state
   * @param {{name: String, email: String}} payload
  */
  // eslint-disable-next-line no-shadow
  login(state, payload) {
    state.loggedIn = true;
    state.name = payload.name;
    state.email = payload.email;
  },
  /**
   *
   * @param {State} state
   */
  // eslint-disable-next-line no-shadow
  logout(state) {
    state.loggedIn = false;
    state.name = null;
    state.email = null;
  },

};

export default {
  namespaced: true,
  state,
  mutations,
};
