/**
 * Stringify object to a pretty json
 * @return APIResponse
 */
export function stringifyObject(value: any) {
    return JSON.stringify(value, null, 2);
}