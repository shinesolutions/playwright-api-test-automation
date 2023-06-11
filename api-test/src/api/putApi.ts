import {APIResponse} from "@playwright/test";
import ENV from "../utils/env";
import apiManager from "./apiManager";

class PutApi {

    POSTS_URL: String = ENV.BASE_URL + "/posts";

    headers = {'custom-header': 'put-test'};

    /**
     * PUT /posts
     * @param id Post ID
     * @param body request body
     * @return APIResponse
     */
    async updateUserPost(id: number, body: String) {
        return await apiManager.put(this.POSTS_URL + '/' + id, this.headers, body);
    }

}

export default new PutApi();