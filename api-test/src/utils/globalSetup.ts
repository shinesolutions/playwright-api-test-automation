import dotenv from "dotenv"

async function globalSetup() {

    if (process.env.ENVIRONMENT) {
        dotenv.config({
            path: `.env.${process.env.ENVIRONMENT}`,
            override: true
        })
    }

}

export default globalSetup