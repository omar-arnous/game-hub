import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '22ed8af2bbff4ef791d1006a94fa27f4',
  },
});
