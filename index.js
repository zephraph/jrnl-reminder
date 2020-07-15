#!/usr/bin/env node

const execa = require("execa");
const notifier = require("node-notifier");
const nc = new notifier.NotificationCenter();

const pathToJrnl = process.env.PATH_TO_JRNL || "jrnl"

const jrnl = (...args) => execa(pathToJrnl, args);

(async () => {
  const desiredFrequency = "30 minutes"
  const recentEntries = (await jrnl("-from", `${desiredFrequency} ago`, "--export", "json")).stdout;
  const { entries } = JSON.parse(recentEntries);

  if (entries.length > 0) {
    console.log(`Has entries from last ${desiredFrequency}`);
    return;
  }

  nc.notify({
    title: "Journal reminder",
    message: "You haven't added a jrnl entry in a while. What are you working on?",
    closeLabel: "Not now",
    reply: true,
    wait: true,
    timeout: 5
  });

  nc.on("replied", (obj, options, metadata) => {
    const message = metadata.activationValue;
    jrnl(message);
  });
})();
