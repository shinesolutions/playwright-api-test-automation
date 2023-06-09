import {APIResponse} from "@playwright/test";
import ENV from "../utils/env";
import apiManager from "./apiManager";

class PostApi {

    POSTS_URL: String = ENV.BASE_URL + "/posts";

    headers = {'custom-header': 'post-test'};

    /**
     * POST /posts
     * @param body request body
     * @return APIResponse
     */
    async createUserPost(body: String) {
        return await apiManager.post(this.POSTS_URL, this.headers, body);
    }

}

export default new PostApi();