import { test, expect } from "@playwright/test"
import {getUserPost, getUserPosts} from "../api/getApi";


test.describe("Retrieve user posts", () => {

    test("Get user posts", async() => {
        const response = await getUserPosts()

        expect(response.ok()).toBeTruthy()
        expect(response.status()).toBe(200)

    })

    test("Get user post ", async() => {
        const response = await getUserPost(1)

        expect(response.ok()).toBeTruthy()
        expect(response.status()).toBe(200)
        expect(await response.json()).toEqual(expect.objectContaining({
            "id":1,
            "userId": 1
        }))

    })

    }
)