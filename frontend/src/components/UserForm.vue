<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name">Name:</label>
      <input type="text" v-model="user.name" required />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" v-model="user.email" required />
    </div>
    <button type="submit">{{ editMode ? 'Update' : 'Add' }} User</button>
    <div v-if="message">{{ message }}</div>
  </form>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({})
    },
    editMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      message: ''
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (this.editMode) {
          await this.$store.dispatch('updateUser', this.user);
          this.message = 'User updated successfully!';
        } else {
          await this.$store.dispatch('addUser', this.user);
          this.message = 'User added successfully!';
          this.$emit('user-added'); // Notify parent component
        }
        this.$emit('close');
      } catch (error) {
        this.message = 'Error occurred. Please try again.';
      }
    }
  }
};
</script>

<style scoped>
/* Add styles if needed */
</style>
