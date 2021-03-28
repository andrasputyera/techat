<template>
    <div class="chat-window">
        <div v-if="error">{{ error }}</div>
        <div v-if="documents" class="messages" ref="messages">
            <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
                <!-- Don't need .toDate() method after createdAt property once date has been formatted  -->
                <span class="created-at">{{ doc.createdAt }}</span>
                <span class="name">{{ doc.name }}</span>
                <span class="message">{{ doc.message }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import getCollection from '@/composables/getCollection'
import { formatDistanceToNow } from 'date-fns'
import { computed, onUpdated, ref } from '@vue/runtime-core'



export default {
    setup() {
        const { error, documents } = getCollection('messages')

        // Computed property that cycles through the docs & updates date to proper format
        const formattedDocuments = computed(() => {
            if (documents.value) {
                return documents.value.map(doc => {
                    let time = formatDistanceToNow(doc.createdAt.toDate())
                    // Spreads out all the properties of the documents
                    return {...doc, createdAt: time }
                })
            }
        })

        // Auto-scroll to bottom of messages
        const messages = ref(null)

        // The most recent messages need to be visible every time the dom updates
        onUpdated(() => {
            // Makes the document scroll down to the bottom
            messages.value.scrollTop = messages.value.scrollHeight
        })

        return { error, documents, formattedDocuments, messages }
    }
}
</script>

<style scoped>
  .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .single {
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
</style>