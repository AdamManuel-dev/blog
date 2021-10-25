const fetch = require('node-fetch');

module.exports = async (req, res) => {
  // res.send(`Hello ${feed}!`);

  const response = await fetch('https://adammanuel-dev.github.io/feeds/all.json', {
    headers: {
      accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-language': 'en-US,en;q=0.9',
      'cache-control': 'max-age=0',
      'if-modified-since': 'Sat, 23 Oct 2021 09:20:12 GMT',
      'if-none-match': 'W/"6173d3cc-4e88"',
      'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'none',
      'sec-fetch-user': '?1',
      'sec-gpc': '1',
      'upgrade-insecure-requests': '1',
    },
    body: null,
    method: 'GET',
  });

  res.send(response);
};
