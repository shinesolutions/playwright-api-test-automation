import ENV from "../utils/env";
import apiManager from "./apiManager";

class PostApi {

    POSTS_URL: string = ENV.BASE_URL + "/posts";

    headers = {'custom-header': 'post-test'};

    /**
     * POST /posts
     * @param body request body
     * @returns The Api Response
     */
    async createUserPost(body: string) {
        return await apiManager.post(this.POSTS_URL, this.headers, body);
    }

}

export default new PostApi();