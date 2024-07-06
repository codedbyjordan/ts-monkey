import { createProjectSync } from "@ts-morph/bootstrap";
import ts from "typescript";
import logger from "./logger";

const project = createProjectSync({
  useInMemoryFileSystem: true,
});

export default function transpile(source: string) {
  project.createSourceFile("index.ts", source);

  const program = project.createProgram();

  const diagnostics = ts.getPreEmitDiagnostics(program);

  if (diagnostics.length > 0) {
    diagnostics.forEach((diagnostic) => {
      logger.error(`<b>TypeScript Error: </b> ${diagnostic.messageText}`);
    });
    return;
  }

  return ts.transpile(source);
}
