import consts from '../../client/utils/consts'

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || '3000'

export default Object.freeze({
  HOST,
  PORT,
  LB_ADDR: process.env.LB_ADDR || `http://${HOST}:${PORT}/hpi`,
  ...consts
})
