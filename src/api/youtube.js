import axios from 'axios'

const KEY = 'AIzaSyCKsKn6cvmpY-vHDstT24vyPDQcxgsNNpo'

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      type: 'video',
      maxResults: '5',
      key: KEY
   }
})