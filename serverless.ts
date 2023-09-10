import { todoFunctions } from "./src/jsonPlaceHolder/serverless-functions";
import { Serverless } from "serverless/aws";

const todo: Serverless = {
  service: "todo-server",
  useDotenv: true,
  provider: {
    name: "aws",
    runtime: "nodejs18.x",
    region: "${env:AWS_REGION}",
    logRetentionInDays: 30,
    memorySize: 512,
    timeout: 30,
    environment: {
      LOG_LEVEL: "${env:LOG_LEVEL}",
      API_URL: "${env:API_URL}",
    },
  },
  package: {
    individually: true,
    patterns: ["!.git/**", "!src/**", "!node_modules/**"],
  },
  plugins: ["serverless-offline", "serverless-esbuild"],
  functions: { ...todoFunctions },
};

module.exports = todo;
