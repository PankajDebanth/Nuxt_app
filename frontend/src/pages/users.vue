<template>
 <div>
   <h1>User Management</h1>
   <button @click="openForm">Add User</button>
   <UserForm v-if="formVisible" @close="formVisible = false" @user-added="fetchUsers" />
   <table>
     <thead>
       <tr>
         <th>Name</th>
         <th>Email</th>
         <th>Actions</th>
       </tr>
     </thead>
     <tbody>
       <tr v-for="user in users" :key="user.id">
         <td>{{ user.name }}</td>
         <td>{{ user.email }}</td>
         <td>
           <button @click="editUser(user)">Edit</button>
           <button @click="deleteUser(user.id)">Delete</button>
         </td>
       </tr>
     </tbody>
   </table>
 </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue';

export default {
 components: { UserForm },
 data() {
   return {
     users: [],
     formVisible: false,
     userToEdit: null,
   };
 },
 async mounted() {
   await this.fetchUsers();
 },
 methods: {
   async fetchUsers() {
     await this.$store.dispatch('fetchUsers');
     this.users = this.$store.state.users;
   },
   openForm() {
     this.formVisible = true;
     this.userToEdit = null; 
   },
   editUser(user) {
     this.userToEdit = user;
     this.formVisible = true;
   },
   async deleteUser(userId) {
     await this.$store.dispatch('deleteUser', userId);
     await this.fetchUsers(); // Refresh the user list
   }
 },
 watch: {
   userToEdit(newUser) {
     if (newUser) {
       this.formVisible = true;
     }
   }
 },
};
</script>
