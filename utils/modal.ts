import { defineStore } from 'pinia'
import axios from 'axios'

interface ModalState {
  isModalOpen: boolean
  modalTitle: string
  phoneNumber: string | null
}

export const useModalStore = defineStore('modal', {
  state: (): ModalState => ({
    isModalOpen: false,
    modalTitle: 'Login',
    phoneNumber: null,
  }),
  actions: {
    openModal(title: string) {
      this.modalTitle = title
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    },
    async handleLogin(phoneNumber: string) {
      try {
        this.phoneNumber = phoneNumber
        const response = await axios.post('https://dummyjson.com/auth/login', {
          username: phoneNumber,
          password: 'dummy_password',
        })

        if (response.data.isSuccessful) {
          console.log('Login successful:', response.data)
        } else {
          console.error('Login failed:', response.data.message)
        }
      } catch (error) {
        console.error('Error during login:', error)
      }
    },
    async handleSignup() {
      try {
        const response = await axios.post('https://dummyjson.com/auth/signup', {
          phoneNumber: this.phoneNumber,
        })
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    },
  },
})