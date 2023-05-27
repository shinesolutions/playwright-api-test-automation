// See playwright documentation for Playwright Test configuration here: https://playwright.dev/docs/test-configuration
const config = {
    use: {
        baseURL: 'https://jsonplaceholder.typicode.com/',
        extraHTTPHeaders: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }
}

export default config