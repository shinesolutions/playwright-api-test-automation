import {APIResponse} from "@playwright/test";

export async function traceApiCalls(method: string, url: string, requestBody: string, response: APIResponse, headers?: { [key: string]: string; }) {

    const trace = process.env.TRACE_API_CALLS.toLowerCase();

    if (trace === "true") {

        const name = method + ": " + url;

        const requestHeaders = await getHeadersString(headers);

        const requestDetails = `REQUEST HEADER(s): \n${requestHeaders} \nREQUEST BODY: \n${requestBody}`;

        const responseHeaders = await getHeadersString(response.headers());

        const responseBody = await response.text();

        const responseDetails = `RESPONSE STATUS: ${response.status()} \n\nRESPONSE HEADER(s): \n${responseHeaders} \nRESPONSE BODY: \n${responseBody}`;

        await console.log(`\n ================================ \n${name} \n\n${requestDetails} \n\n\n${responseDetails} \n ================================ \n`);

    }

}

export async function getHeadersString(headers: { [key: string]: string; }) {

    let headersString = "";

    for (const key in headers) {
        if (Object.hasOwnProperty.call(headers, key)) {
            const value = headers[key];
            headersString = headersString + `${key}: ${value}\n` ;
        }
    }

    return headersString;
}