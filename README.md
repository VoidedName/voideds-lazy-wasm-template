## About
This template was inspired by the ancient rust wasm-webpack (still build on webpack4). What's different? I build it on Vite, Feel free to ping me on Discord or submit a PR. 

## How to install
**!Important**: WASM-PACK (with default features) requires a perl installation.

Using a windows system, a viable perl version can be found here https://strawberryperl.com/

Alternatively, you can disable the default features of wasm-pack. (Feature openssl-sys has the perl dependency)

* `npm i` to install all the npm stuff
* `npm run dev` to start up vites dev server
* `npm run build` will build this piece of art :)

## What does each thing do?

* `public` vite will bundle these into dist as a public resource.

* `package.json` standard meta data for npm stuff.

* `tsconfig.json` config for ts. What, did you really think this wouldn't be TS? 

* `index.html` entry point vite uses, vite doesn't appear to watch it and I am not going to bother trying to make it. PR please if you want to fix it :)

* The `src` folder contains your TS code.

* The `wasm` folder contains your Rust project.
    * `Cargo.toml` is like `package.json`, just for rust.
    * `Cargo.lock` think `package-lock.json`, just for rust.
    * `src` the fun part of this all, rust code goes here :3.
    * `tests` tests should go here, if you feel like doing tests ;)
