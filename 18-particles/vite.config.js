const isCodeSandbox = !!process.env.SANDBOX_URL

export default {
    root: "src/",
    publicDir: "../static/",
    base: "./",
    server:
    {
        host: true,
        open: !isCodeSandbox // Open if it's not a CodeSandbox
    },
    build:
    {
        outDir: "../public",
        emptyOutDir: true,
        sourcemap: true
    }
}