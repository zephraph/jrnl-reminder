const execa = require("execa");
const notifier = require("node-notifier");
const nc = new notifier.NotificationCenter();

const jrnl = (...args) => execa("jrnl", args);

(async () => {
  const lastHourEntries = (await jrnl("-from", "last hour", "--export", "json")).stdout;
  const { entries } = JSON.parse(lastHourEntries);

  if (entries.length > 0) {
    console.log("Has entires from last hour");
    return;
  }

  nc.notify({
    title: "Journal reminder",
    message: "You haven't added a jrnl entry in a while. What are you working on?",
    closeLabel: "Not now",
    reply: true,
    wait: true,
    timeout: 60
  });

  nc.on("replied", (obj, options, metadata) => {
    const message = metadata.activationValue;
    jrnl(message);
  });
})();
