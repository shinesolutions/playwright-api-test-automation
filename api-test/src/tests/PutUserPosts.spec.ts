import {test, expect} from "@playwright/test";
import putApi from "../api/putApi";
import {stringifyObject} from "../utils/jsonUtils";

test.describe("Put user posts", () => {

        test("Update user post", async () => {

            const body = stringifyObject({
                id: 1,
                title: "Existing post",
                body: "This is a post",
                userId: 1
            });

            const response = await putApi.updateUserPost(1, body);

            expect(response.ok()).toBeTruthy();
            expect(response.status()).toBe(200);

        })

    }
)