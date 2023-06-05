import {APIResponse} from "@playwright/test";
import {get} from "./apiExecutor";
import ENV from "../utils/env";


/**
 * GET /posts
 * @return APIResponse
 */
export async function getUserPosts() {
    return await get(ENV.BASE_URL + '/posts');
}

/**
 * GET /post
 * @param id Post ID
 * @return APIResponse
 */
export async function getUserPost(id: number) {
    return await get(ENV.BASE_URL + '/posts/' + id);
}