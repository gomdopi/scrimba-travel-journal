export default function Entry() {
  return (
    <section className="entry-item">
      <img
        src="https://s3-alpha-sig.figma.com/img/188d/a2c4/e143f205acb5ae4dc702b16f370e7994?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qJ4kk5savTvlK5QZwAf-xoQdxpSZPcqM9h5gC-XymCCyHWLoo76aqW5-6d8EyZBAm1Am4aE2tG3XkH~HDkF2vV0fGXG7AXnlkbC7U4e~m7UmUIFyrCD0tdakx~waHmRuM6WcYUC0VzL-S8bT4vimlTq9vXVIHkL4UJxGny3a~MH1ERlzE3TtxZ5vrJEvLY1bvY8RMI9lX-q66vioP8EqH~KTF7vPZCqwLAhLnXKKKcORlBN6gkEW8xcdsViFAmKFHyD~r73mS8r40ujwdThNWoGndbHQf-cLyQZLbF0DhLWiMBlgQ122SCzJ6VE5uqDu2BVTdcU6PKeG10LJAqTHSQ__"
        alt="Image of Mount Fuji"
        className="entry-item-image"
      />
      <section className="entry-item-content">
        <header className="entry-item-content-header">
          <img
            src="marker.png"
            alt="Google Maps Marker"
            className="marker-icon"
          />
          <span className="entry-item-content-location">JAPAN</span>
          <a
            className="entry-item-content-google-link"
            href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          >
            View on Google Maps
          </a>
        </header>
        <main className="entry-item-content-text">
          <h1 className="entry-item-content-title">Mount Fuji</h1>
          <span className="entry-item-content-dates">
            12 Jan, 2021 - 24 Jan, 2021
          </span>
          <p className="entry-item-content-paragraph">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </main>
      </section>
    </section>
  )
}
