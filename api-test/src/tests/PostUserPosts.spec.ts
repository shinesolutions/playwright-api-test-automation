import {test, expect} from "@playwright/test";
import postApi from "../api/postApi";
import {stringifyObject} from "../utils/jsonUtils";

test.describe("Create user posts", () => {

        test("Post user posts", async () => {

            const body = stringifyObject({
                    title: "New Post",
                    body: "This is a new post",
                    userId: 1
                }
            );

            const response = await postApi.createUserPost(body);

            expect(response.ok()).toBeTruthy();
            expect(response.status()).toBe(201);

        })

    }
)