// const cookieparser = process.server ? require("cookieparser") : undefined;

// export const state = () => {
//   return {
//     auth: null
//   };
// };
// export const mutations = {
//   setAuth(state, auth) {
//     state.auth = auth;
//   }
// };
// export const actions = {
//   nuxtServerInit({ commit }, { req }) {
//     console.log("in middlware", req)
//     let auth = null;
//     if (req.headers.cookie) {
//       const parsed = cookieparser.parse(req.headers.cookie);
//       try {
//         auth = JSON.parse(parsed.auth);
//       } catch (err) {
//         // No valid cookie found
//       }
//     }
//     console.log("+++++++++++ after if block", auth);
//     commit("setAuth", auth);
//   }
// };