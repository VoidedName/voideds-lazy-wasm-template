import {defineConfig, PluginOption} from 'vite'
import {ChildProcess, spawn} from "child_process"
import * as path from "path";

function wasmWatcher(): PluginOption {
    let watcher: ChildProcess;
    return [
        {
            name: "wasm-watcher-serve",
            apply: "serve",
            buildStart() {
                watcher = spawn(
                    "cargo",
                    [
                        "watch",
                        "-C", "wasm",
                        "-i", ".gitignore",
                        "-s", "wasm-pack build --debug --target web --out-dir ../pkg --out-name assembly"
                    ], {
                        cwd: process.cwd(),
                        stdio: ["ignore", "ignore", "inherit"]
                    })
            },
        },
        {
            name: "wasm-watcher-build",
            apply: "build",
            buildStart() {
                watcher = spawn(
                    "wasm-pack",
                    [
                        "build",
                        "--release",
                        "--target", "web",
                        "--out-dir", "../pkg",
                        "--out-name", "assembly"
                    ], {
                        cwd: path.join(process.cwd(), "wasm"),
                        stdio: ["ignore", "ignore", "inherit"]
                    })
                return new Promise((resolve, reject) => {
                    watcher.on("exit", (e) => e === 0 ? resolve() : reject(e))
                })
            },
        }]
}

export default defineConfig({
    plugins: [wasmWatcher()]
})
