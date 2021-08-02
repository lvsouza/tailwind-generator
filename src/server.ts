import express from "express";
import cors from "cors";

import { generateCss } from './GenerateCss';
import { extractClassNames } from './ExtractClassNames';

const app = express();

app.use(express.json());
app.use(cors());


app.post('/class-names', async (req, res) => {
    const { body } = req;

    const css = await generateCss(body);

    const classNames = extractClassNames(css);

    return res.json(classNames);
});


app.listen(process.env.PORT || 3333, () => console.log('Pronto!'));
