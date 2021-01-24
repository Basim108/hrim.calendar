<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    persistent
    max-width="600px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        width="100%"
        text
        outlined
        v-bind="attrs"
        v-on="on"
      >
        Create
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Event</span>
      </v-card-title>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="submit"
      >
        <v-card-text>
          <v-container>
            <v-row
              justify="space-around"
              align="center"
            >
              <v-col cols="12">
                <v-text-field
                  v-model="dto.name"
                  label="Event name *"
                  :rules="[v => !!v || 'Name is required']"
                  required
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="dto.description"
                  label="Description"
                />
              </v-col>
              <v-col cols="8">
                <v-color-picker
                  v-model="dto.color"
                  class="ma-2"
                  :swatches="colors"
                  flat
                  show-swatches
                />
              </v-col>
            </v-row>
          </v-container>
          <small>* required field</small>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="clear"
          >
            clear
          </v-btn>
          <v-spacer />
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            type="submit"
            :disabled="!valid"
          >
            Create
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { VDialog } from 'vuetify/lib/components/VDialog'
import { VCard, VCardTitle, VCardActions, VCardText } from 'vuetify/lib/components/VCard'
import { VForm } from 'vuetify/lib/components/VForm'
import { VBtn } from 'vuetify/lib/components/VBtn'
import { VSpacer, VRow, VCol, VContainer } from 'vuetify/lib/components/VGrid'
import { VColorPicker } from 'vuetify/lib/components/VColorPicker'
import { VTextField } from 'vuetify/lib/components/VTextField'

export default {
  name: 'CreateEventDialog',
  components: {
    VDialog,
    VCard,
    VForm,
    VCardActions,
    VBtn,
    VSpacer,
    VCardText,
    VContainer,
    VRow,
    VCol,
    VColorPicker,
    VTextField,
    VCardTitle
  },
  data: () => ({
    valid: true,
    dialog: false,
    dto: {
      name: '',
      description: '',
      color: '#00FF00'
    },
    colors: [
      ['#FF0000', '#AA0000', '#550000'],
      ['#FFFF00', '#AAAA00', '#555500'],
      ['#00FF00', '#00AA00', '#005500'],
      ['#00FFFF', '#00AAAA', '#005555'],
      ['#0000FF', '#0000AA', '#000055']
    ]
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        this.dialog = false
        this.$store.dispatch('events/createEvent', this.dto)
      }
    },
    clear () {
      this.dto = {
        name: '',
        description: '',
        color: '#00FF00'
      }
    }
  }
}
</script>

<style scoped>

</style>
