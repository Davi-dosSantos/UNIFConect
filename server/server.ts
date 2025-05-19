import { app } from './app'

app.listen({ port: 3333, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(`🚀 Servidor rodando em ${address}`)
})
