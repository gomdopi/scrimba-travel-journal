import Entry from "./components/Entry"
import Header from "./components/Header"
import entries from "../data.ts"

export default function App() {
  const journalEntries = entries.map((entry) => (
    <Entry
      key={entry.id}
      img={entry.img}
      title={entry.title}
      country={entry.country}
      googleMapsLink={entry.googleMapsLink}
      dates={entry.dates}
      text={entry.text}
    />
  ))
  return (
    <>
      <Header />
      {journalEntries}
    </>
  )
}
