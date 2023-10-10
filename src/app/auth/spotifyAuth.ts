export default async function login() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: bodyParse(),
  });

  return response.json();
}

function bodyParse(): BodyInit {
  const data: Record<string, string> = {
    grant_type: "client_credentials",
    client_id: `${process.env.API_CLIENT_ID_SPOTIFY}`,
    client_secret: `${process.env.API_SECRET_SPOTIFY}`,
  };

  var formBody = [];
  for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(`${encodedKey}=${encodedValue}`);
  }
  return formBody.join("&");
}
