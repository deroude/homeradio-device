import express from "express";
import bodyParser from "body-parser";
import shoutcastRoute from "./routes/shoutcast";
import cors from "cors";
import request from "request";
import * as local from "./local";


const doRefresh = () => {
    request.patch("https://firestore.googleapis.com/v1beta1/projects/homeradio-de3e3/databases/(default)/documents/devices/" + local.getId() + "?updateMask.fieldPaths=localAddress&updateMask.fieldPaths=refresh",
        { json: { "fields": { "localAddress": { "stringValue": local.getIP() }, "refresh": { "booleanValue": false } } } })
        .on('response', re => { if (re.statusCode === 200) console.log("Refreshed data on demand"); });
    setTimeout(doRefresh, 5000);
}

doRefresh();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/shoutcast", shoutcastRoute);

app.listen(9090);