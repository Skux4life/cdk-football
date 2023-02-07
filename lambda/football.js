const axios = require('axios').default;

exports.handler = async function(event) {
    console.log("request:", JSON.stringify(event, undefined, 2));
    let league = 39;
    let season = 2022;
    let team = 40;
    if (event.queryStringParameters) {
        if (event.queryStringParameters.league) {
            league = event.queryStringParameters.league
        }
        if (event.queryStringParameters.season) {
            season = event.queryStringParameters.season
        }
        if (event.queryStringParameters.team) {
            team = event.queryStringParameters.team
        }
    }

    const options = {
        method: 'GET',
        url: process.env.FOOTBALL_API_URL,
        params: { season: season, league: league, team: team },
        headers: { 'x-apisports-key': process.env.API_KEY }
      };
    
    const resp = await axios.request(options);
    console.log(resp.data);
    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(resp.data)
    }
}