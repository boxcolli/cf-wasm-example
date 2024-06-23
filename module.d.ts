declare module "*.wasm" {
    const src: WebAssembly.Module;
    export default src;
}

declare module 'add-module' {
    export interface AddWasmExports {
        add(x: number, y: number): number;
      }
}
