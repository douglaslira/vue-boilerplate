<template>
  <div>
    <a href="javascript:void(0);" v-on:click="openModal()">About me</a>
    <modal v-bind:showModal="showModal" v-bind:closeAction="closeDialog">
      <h5 slot="header" class="modal-title">About</h5>
      <div slot="body">
        <p>Name: <strong>Douglas Lira</strong></p>
        <p>Email: <strong>douglas.lira.web@gmail.com</strong></p>
      </div>
      <div slot="footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" v-on:click="closeDialog()">Close</button>
      </div>
    </modal>
  </div>
</template>

<script>
  import Modal from '@/components/Modal.vue'
  export default {
    name: 'about',
    components: { Modal },
    data () {
      return {
        showModal: false
      }
    },
    methods: {
      openModal () {
        this.showModal = true
      },
      closeDialog () {
        this.showModal = false
      }
    }
  }
</script>
