import { events, Job } from "@brigadecore/brigadier"
import * as colors from "colors/safe"

events.on("github.com/brigadecore/brigade/cli", "exec", async event => {
  console.log(colors.green("creating job foo"))
  let fooJob = new Job("foo", "debian:latest", event)
  fooJob.primaryContainer.command = ["echo"]
  fooJob.primaryContainer.arguments = ["foo"]
  await fooJob.run()

  console.log(colors.green("creating job bar"))
  let barJob = new Job("bar", "debian:latest", event)
  barJob.primaryContainer.command = ["echo"]
  barJob.primaryContainer.arguments = ["bar"]
  await barJob.run()
})
