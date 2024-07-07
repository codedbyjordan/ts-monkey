import { writeToOutput } from "./write-to-output";

const logger = {
  log: (...args: unknown[]) => {
    writeToOutput(null, args);
  },

  error: (...args: unknown[]) => {
    writeToOutput("text-red-300", args);
  },
};

export default logger;
