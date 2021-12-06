const { connect } = require("getstream");
require("dotenv").config();

const api_key = process.env.GET_STREAM_API_KEY;
const secret_key = process.env.GET_STREAM_API_SECRET;
const app_id = process.env.GET_STREAM_APP_ID;

const token = async (req, res) => {
  try {
    const { user_id } = req.query;
    console.log("user_id", user_id);

    if (!user_id) return res.status(400).json({ message: "invalid request" });

    const serverClient = connect(api_key, secret_key, app_id);

    const getstream_token = serverClient.createUserToken(user_id);

    res.status(200).json({ getstream_token });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
};

module.exports = { token };
