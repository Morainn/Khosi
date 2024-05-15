export const fetchFixtures = async () => {
    //const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?league=3&season=2024&team=33&timezone=south%20africa';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '31c4d6ba28msh3ac6e5868ecdbaap1680b4jsn4f1deb8f1d44',
            'X-RapidAPI-Host': 'football6.p.rapidapi.com'},
    };

/*     try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    } */

     const result = fetch(
        'https://football6.p.rapidapi.com/teams/league/%7BleagueId%7D',
        options
    )
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .catch((err) => console.error(err));

      return result; 
};