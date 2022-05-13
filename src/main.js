import { createApp } from 'vue';

import App from './App.vue'

import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseDialog from './components/UI/BaseDialog.vue'

const app = createApp(App)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-dialog', BaseDialog)


app.mount('#app')


// const data = {
//     prompt: 'Write a poem about a dog wearing skis',
//     temperature: 0.5,
//     max_tokens: 64,
//     top_p: 1.0,
//     frequency_penalty: 0.0,
//     presence_penalty: 0.0
//   };
  
  
//   fetch('https://api.openai.com/v1/engines/text-ada-001/completions', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${process.env.OPENAI_SECRET}`
//     },
//     body: JSON.stringify(data)
//   })
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         alert('Server returned ' + response.status + ' : ' + response.statusText);
//       }
//     })
//     .then(response => {
//       this.result = response.body;
//       this.responseAvailable = true;
//     })
//     .catch(err => {
//       console.log(err);
//     });