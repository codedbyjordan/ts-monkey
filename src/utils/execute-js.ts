import logger from "./logger";
import { writeToOutput } from "./write-to-output";

export default function executeJs(jsCode: string) {
  const originalLog = console.log;
  console.log = logger.log;

  const last = jsCode.trim().split("\n").pop();

  const fn = new Function(`
    ${jsCode}
    return ${last};
  `);

  const result = fn();

  if (result) writeToOutput(null, result);

  console.log = originalLog;
}
