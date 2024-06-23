import { Hono } from 'hono'
import wasmModule from './add.wasm'
import { AddWasmExports } from 'add-module'

const app = new Hono()


app.get('/', async (c) => {
  const { a, b } = c.req.query()

  // Prepare wasm module
  const instance = await WebAssembly.instantiate(wasmModule)
  const { add } = instance.exports as unknown as AddWasmExports

  const result = add(Number(a) || 1, Number(b) || 3)

  return c.text(`Result: ${result}`)
})

export default app
