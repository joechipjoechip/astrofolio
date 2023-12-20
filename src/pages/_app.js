import { createApp } from 'vue';
import { MotionPlugin } from '@vueuse/motion'

const app = createApp()

export default (app) => {
  app.use(MotionPlugin)
};
