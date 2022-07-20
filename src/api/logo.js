import fetch from "node-fetch"

export default async function fetchLogos(req, res) {
  const url = "https://api.brandfetch.io/v2/brands"

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.API_KEY}`,
  }

  const companies = ["facebook", "twitter", "amazon"]

  try {
    let logos = await Promise.all(
      companies.map(async company => {
        const result = await fetch(`${url}/${company}.com`, {
          method: "GET",
          headers: headers,
        }).then(res => {
          return res.json()
        })

        return result.logos[0].formats[1].src
      })
    )

    res.json(logos)
  } catch (error) {
    res.status(500).send(error)
  }
}
