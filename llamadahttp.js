const fetch = require('node-fetch');

(
    async() => {
        const solicitud = await fetch("http://0bdcfd77b44b.ngrok.io/api/data",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': `nodejs/${process.version}`,
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                palabra: "Hola mundo"
            })
        });

        const payload = await solicitud.json();
        console.log(payload);
    }
)();
