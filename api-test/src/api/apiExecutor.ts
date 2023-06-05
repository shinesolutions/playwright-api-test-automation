import {request} from "@playwright/test";
import {traceApiCalls} from "../reporter/reportApiDetails";

/**
 * Function for making GET API call
 * @param url: URL to which request must be sent
 * @param headers: headers to be used in the request
 * @param requestBody: body of the request
 * @return APIResponse
 */
export async function get(url: String, headers?: { [key: string]: string; }, requestBody?: String) {
    const apiContext = await request.newContext();

    const options = {
        data: requestBody,
        headers: headers
    };

    const response = await apiContext.get(url, options);

    await traceApiCalls("GET", url, requestBody, response, headers);

    return response;
}
