

import axios     from 'axios'
import * as config from "./config";


export default axios.create({
  baseURL: config.apiEndPoint
});
