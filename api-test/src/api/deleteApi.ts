import {APIResponse} from "@playwright/test";
import ENV from "../utils/env";
import apiManager from "./apiManager";

class DeleteApi {

    POSTS_URL: String = ENV.BASE_URL + "/posts";

    headers = {'custom-header': 'delete-test'};

    /**
     * DELETE /posts/:id
     * @param id Post ID
     * @return APIResponse
     */
    async deleteUserPost(id: number) {
        return await apiManager.delete(this.POSTS_URL + '/' + id, this.headers);
    }

}

export default new DeleteApi();