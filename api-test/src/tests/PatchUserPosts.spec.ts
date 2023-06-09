import {test, expect} from "@playwright/test";
import patchApi from "../api/patchApi";
import {stringifyObject} from "../utils/jsonUtils";

test.describe("Patch user posts", () => {

        test("Update user post", async () => {

            const body = stringifyObject({
                title: 'Just an edited title'
            });

            const response = await patchApi.updateUserPost(1, body);

            expect(response.ok()).toBeTruthy();
            expect(response.status()).toBe(200);

        })

    }
)