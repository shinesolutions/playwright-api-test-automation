import ENV from "../utils/env";
import apiManager from "./apiManager";

class PatchApi {

    POSTS_URL: string = ENV.BASE_URL + "/posts";

    headers = {'custom-header': 'patch-test'};

    /**
     * PATCH /posts/{:id}
     * @returns The Api Response
     */
    async updateUserPost(id: number, body: string) {
        return await apiManager.patch(this.POSTS_URL + '/' + id, this.headers, body);
    }

}

export default new PatchApi();