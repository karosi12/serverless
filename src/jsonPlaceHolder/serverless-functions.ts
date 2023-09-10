import type { Functions } from "serverless/aws";

export const todoFunctions: Functions = {
  todos: {
    handler: "src/jsonPlaceHolder/handlers.todosListener",
    events: [
      {
        schedule: {
          name: "todos",
          rate: "rate(5 minutes)",
          enabled: true,
        },
      },
    ],
  },
};
