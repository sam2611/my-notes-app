// import express from "express";
// import apiRoute, {apiProtected} from "./src/routes/api.js";
// import mongoose from "mongoose";
// import { DB_CONNECT } from "./src/utils/constants.js";
// import AuthMiddleware from "./src/middlewares/AuthMiddleware.js";
// import cors from 'cors';

// const app=express();

// mongoose.connect(DB_CONNECT)
//     .then(() => {
//         console.log('Connected to MongoDB');
//         const PORT = 8000;

//         app.use(cors());
//         app.use(express.json());
//         app.use('/api/', apiRoute);
//         app.use('/api/',AuthMiddleware, apiProtected);

//         app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
//     })
//     .catch((error) => {
//         console.error('Error connecting to MongoDB:', error);
//     });

import express from "express";
import apiRoute, { apiProtected } from "./src/routes/api.js";
import mongoose from "mongoose";
import { DB_CONNECT } from "./src/utils/constants.js";
import AuthMiddleware from "./src/middlewares/AuthMiddleware.js";
import cors from 'cors';

const app = express();

mongoose.connect(DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        const PORT = process.env.PORT || 8000;

        app.use(cors());
        app.use(express.json());
        
        // General error handler for JSON parsing issues
        app.use((err, req, res, next) => {
            if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
                console.error('Bad JSON');
                return res.status(400).send({ message: 'Invalid JSON' });
            }
            next();
        });

        app.use('/api/', apiRoute);
        app.use('/api/', AuthMiddleware, apiProtected);

        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
