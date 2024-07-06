const logger = {
  log: (...args: unknown[]) => {
    const outputContainer = document.getElementById("console-output");
    const outputLinePre = document.createElement("pre");
    outputLinePre.innerHTML += args.join(" ") + "<br>";
    outputContainer?.appendChild(outputLinePre);
  },

  error: (...args: unknown[]) => {
    const outputContainer = document.getElementById("console-output");
    const outputLinePre = document.createElement("pre");
    outputLinePre.className = "text-red-500";

    outputLinePre.innerHTML += args.join(" ") + "<br>";

    outputContainer?.appendChild(outputLinePre);
  },
};

export default logger;
