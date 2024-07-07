export function writeToOutput(className: string | null, ...args: unknown[]) {
  const outputContainer = document.getElementById("console-output");
  const outputLinePre = document.createElement("pre");
  if (className) outputLinePre.className = className;
  outputLinePre.innerHTML += args.join(" ") + "<br>";
  outputContainer?.appendChild(outputLinePre);
}
