import Entry from "./components/Entry"
import Header from "./components/Header"
import entries from "../data.ts"

export default function App() {
  const journalEntries = entries.map((entry) => (
    <Entry key={entry.id} {...entry} />
  ))
  return (
    <>
      <Header />
      {journalEntries}
    </>
  )
}
