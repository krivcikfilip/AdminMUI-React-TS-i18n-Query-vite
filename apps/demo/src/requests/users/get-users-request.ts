import { restClient } from '@/config/rest-client'
import getDemoData from '@/utils/get-demo-data'

import { UserResponse } from '../responses'

export const getUsersRequest = async () => {
    return getDemoData()

    const { data } = await restClient().get<UserResponse[]>(`/api/v1/users`)
    return data
}
