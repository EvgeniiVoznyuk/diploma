import { $authHost, $host } from './index'

export const getParticipants = async () => {
  const response = await $host.get('api/participant/participants')

  return response
}