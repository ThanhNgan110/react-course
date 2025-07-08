import ApiService from './api-service'

import { URL_API } from '../constants'

export const JobService = new ApiService(URL_API, 'v0')
