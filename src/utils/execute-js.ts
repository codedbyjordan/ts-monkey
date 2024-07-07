import logger from "./logger";

export default function executeJs(jsCode: string) {
  const originalLog = console.log;
  console.log = logger.log;

  const fn = new Function(jsCode);

  fn();

  console.log = originalLog;
}
