const express = require("express")
const cors = require("cors");
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const resp = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username,
            secret: username, first_name: username 
        },
        {headers: {"private-key": "fe9e2bb7-fe5d-4351-a1da-43d373e04d4a"}}
    )
    return res.status(resp.status).json(resp.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }

  
});

app.listen(3001);