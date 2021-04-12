
import {error} from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';


export default {
     error404() {
        error({
            text: 'Введи больше для совпадения!'
          }, 30);
    },

     error() {
        error({
            text: 'Ерунда'
          }, 30);
    }
}