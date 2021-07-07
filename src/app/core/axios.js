

import axios     from 'axios'
import constants from 'shared/constants'
import config from './config'


/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
  baseURL: config.apiEndPoint
});

