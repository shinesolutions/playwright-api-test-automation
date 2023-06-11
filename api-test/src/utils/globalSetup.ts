import {FullConfig} from "@playwright/test";

import dotenv from "dotenv"

async function globalSetup(config: FullConfig) {

    if (process.env.ENVIRONMENT) {
        dotenv.config({
            path: `.env.${process.env.ENVIRONMENT}`,
            override: true
        })
    }

}

export default globalSetup