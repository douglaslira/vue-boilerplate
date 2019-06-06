<template>
  <div>
    <div role="dialog" v-bind:class="{modal: true, in: showModal}" v-bind:style="{ display: showModal ? 'block' : 'none' }">
      <div class="modal-dialog">
        <div class="modal-content">
          <div v-if="this.$slots.header || closeAction" class="modal-header">
            <slot name="header"></slot>
            <button type="button" v-on:click="closeAction" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div v-if="this.$slots.body" class="modal-body">
            <slot name="body"></slot>
          </div>
          <div v-if="this.$slots.footer" class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
    <div v-bind:class="{'modal-backdrop': showModal, in: showModal}"></div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      showModal: Boolean,
      closeAction: Function
    }
  }
</script>

<style scoped></style>
