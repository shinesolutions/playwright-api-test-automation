import {APIResponse} from "@playwright/test";

export async function traceApiCalls(method: String, url: String, body: String, response: APIResponse, headers?: { [key: string]: string; }) {

    const trace = process.env.TRACE_API_CALLS.toLowerCase();

    if (trace === "true") {

        const name = method + ": " + url;

        await console.log("\n ================================ \n"
            + name,
            "\n REQUEST: \n" + body
            + "\n\n HEADERS: \n" + headers
            + "\n\n RESPONSE: \n" + await response.text()
            + "\n ================================ \n"
        );

    }

}