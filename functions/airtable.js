// https://dev.to/fabiorosado/hide-your-api-keys-with-netlify-functions-93m
exports.handler = async (event, context, callback) => {
  const pass = (body) => {
    callback(null, { statusCode: 200, body: JSON.stringify(body) })
  }

  try {
    let response = await fetch(
      'https://api.airtable.com/v0/<account id>/<table name>',
      {
        method: event.httpMethod,
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API}`,
          'Content-Type': 'application/json',
        },
        body: event.body,
      }
    )
    let data = await response.json()
    await pass(data)
  } catch (err) {
    let error = {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({ error: err.message }),
    }
    await pass(error)
  }
}

/* Vue markup
handleSubmit = e => {
  const fields = {
    "fields": {
      "Name": this.state.name,
      "Notes": this.state.notes
      }
     }
    fetch("../../.netlify/functions/airtable", {
    method: "POST",
    body: JSON.stringify(fields)
    })
    .then(() => alert("Form Sent!"))
    .catch(error => alert(error))

    e.preventDefault();
 }
 */

 /* also see https://medium.com/@pailee.wai/hiding-serverless-apps-api-keys-and-secret-key-by-using-netlify-and-netlify-lambda-68c7e4a16a44 8/
