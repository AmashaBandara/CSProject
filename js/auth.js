/**
 * auth.js
 * Simple client-side access gate (NOT secure authentication).
 * Credentials are stored in localStorage; anyone with access to the
 * browser's dev tools can bypass this. Suitable for a demo/single-user
 * admin tool only, not for protecting real sensitive data.
 */

const Auth = {
  SESSION_KEY: 'srm_logged_in_user',

  isLoggedIn() {
    return !!sessionStorage.getItem(this.SESSION_KEY);
  },

  getCurrentUser() {
    return sessionStorage.getItem(this.SESSION_KEY) || '';
  },

  login(username, password) {
    const admin = DataStore.getAdmin();
    if (username === admin.username && password === admin.password) {
      sessionStorage.setItem(this.SESSION_KEY, username);
      return true;
    }
    return false;
  },

  logout() {
    sessionStorage.removeItem(this.SESSION_KEY);
  },
};
