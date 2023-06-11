import {APIResponse} from "@playwright/test";
import ENV from "../utils/env";
import apiManager from "./apiManager";

class PatchApi {

    POSTS_URL: String = ENV.BASE_URL + "/posts";

    headers = {'custom-header': 'patch-test'};

    /**
     * PATCH /posts/{:id}
     * @return APIResponse
     */
    async updateUserPost(id: number, body: String) {
        return await apiManager.patch(this.POSTS_URL + '/' + id, this.headers, body);
    }

}

export default new PatchApi();