import ENV from "../utils/env";
import apiManager from "./apiManager";

class GetApi {

    POSTS_URL: string = ENV.BASE_URL + "/posts";

    headers = {'custom-header': 'get-test'};

    /**
     * GET /posts
     * @returns The Api Response
     */
    async getUserPosts() {
        return await apiManager.get(this.POSTS_URL, this.headers);
    }

    /**
     * GET /post/:id
     * @param id Post ID
     * @returns The Api Response
     */
    async getUserPost(id: number) {
        return await apiManager.get(this.POSTS_URL + '/' + id, this.headers);
    }
}

export default new GetApi();