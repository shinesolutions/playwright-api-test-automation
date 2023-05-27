import {APIResponse, request} from "@playwright/test";

/**
 * GET /posts
 * @return APIResponse
 */
export async function getUserPosts() {
    const apiContext = await request.newContext()

    return await apiContext.get('/posts')
}

/**
 * GET /post
 * @param id Post ID
 * @return APIResponse
 */
export async function getUserPost(id : number) {
    const apiContext = await request.newContext()

    return await apiContext.get('/posts/' + id )
}