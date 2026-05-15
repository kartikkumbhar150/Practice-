import  express  from "express";
import cors from "cors";
import authRoutes from "../routes/authRoutes"

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);

export default app;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});