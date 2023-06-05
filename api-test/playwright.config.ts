// See playwright documentation for Playwright Test configuration here: https://playwright.dev/docs/test-configuration
const config = {
    // Run all tests in parallel.
    fullyParallel: true,
    use: {
        trace: 'off',
        extraHTTPHeaders: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    },
    globalSetup: "src/utils/globalSetup.ts",
    reporter: [
        ['line'],
        ['allure-playwright',
            {
                detail: true
            }
        ]
    ]
}

export default config