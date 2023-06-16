import ENV from "../utils/env";
import apiManager from "./apiManager";

class PutApi {

    POSTS_URL: string = ENV.BASE_URL + "/posts";

    headers = {'custom-header': 'put-test'};

    /**
     * PUT /posts
     * @param id Post ID
     * @param body request body
     * @returns The Api Response
     */
    async updateUserPost(id: number, body: string) {
        return await apiManager.put(this.POSTS_URL + '/' + id, this.headers, body);
    }

}

export default new PutApi();