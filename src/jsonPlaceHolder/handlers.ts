import { logger } from "../shared/logger";
import { todos } from "./service/todo-service";

export const todosListener = async () => {
  const data = await todos();
  logger.info(data);
};
