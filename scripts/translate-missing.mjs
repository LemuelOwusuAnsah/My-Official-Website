import fs from "fs"
import translate from "translate"
const SKIP = /^(nav_|lang_|logo|about_name|career[0-9]+_year|.*_year)$/
async function run() {
  const en = JSON.parse(fs.readFileSync("src/locales/en.json", "utf8"))
  const targets = { fr: "fr", es: "es", de: "de", po: "pt" }
  for (const [file, lang] of Object.entries(targets)) {
    const path = "src/locales/" + file + ".json"
    const loc = JSON.parse(fs.readFileSync(path, "utf8"))
    const todo = Object.keys(en).filter((k) => !SKIP.test(k) && loc[k] === en[k] && typeof en[k] === "string" && en[k].length > 3)
    console.log(file + " — " + todo.length + " to translate")
    let ok = 0, fail = 0
    for (const key of todo) {
      try {
        loc[key] = await translate(en[key], { from: "en", to: lang })
        ok++; process.stdout.write(".")
        await new Promise((r) => setTimeout(r, 800))
      } catch (e) {
        fail++; process.stdout.write("x")
        await new Promise((r) => setTimeout(r, 3000))
      }
    }
    fs.writeFileSync(path, JSON.stringify(loc, null, 2))
    console.log(" done: " + ok + " ok, " + fail + " failed")
  }
}
run().catch(console.error)
