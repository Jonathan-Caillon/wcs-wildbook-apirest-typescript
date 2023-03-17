import express from "express";
import cors from "cors";
import dataSource from "./utils";
import api from "./router/api";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", api);

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
// });

const port = 5000;

// Start Server
const start = async (): Promise<void> => {
  await dataSource.initialize();
  app.listen(port, () =>
    console.log(`Server started on http://localhost:${port}`)
  );
};

void start();
