export const state = () => ({
 users: []
});

export const mutations = {
 SET_USERS(state, users) {
   state.users = users;
 },
 ADD_USER(state, user) {
   state.users.push(user);
 },
 UPDATE_USER(state, updatedUser) {
   const index = state.users.findIndex(user => user.id === updatedUser.id);
   if (index !== -1) {
     state.users.splice(index, 1, updatedUser);
   }
 },
 DELETE_USER(state, userId) {
   state.users = state.users.filter(user => user.id !== userId);
 }
};

export const actions = {
 async fetchUsers({ commit }) {
   const response = await this.$axios.$get('/');
   commit('SET_USERS', response);
 },
 async addUser({ commit }, user) {
   const response = await this.$axios.$post('/', user);
   commit('ADD_USER', response);
 },
 async updateUser({ commit }, user) {
   const response = await this.$axios.$put(`/${user.id}`, user);
   commit('UPDATE_USER', response);
 },
 async deleteUser({ commit }, userId) {
   await this.$axios.$delete(`/${userId}`);
   commit('DELETE_USER', userId);
 }
};
