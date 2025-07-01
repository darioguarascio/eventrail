import path from 'path';
import { router } from "express-file-routing"
import { fileURLToPath } from 'url';

const routes = await router({
  directory: path.join(path.dirname( fileURLToPath(import.meta.url) ), "/../routes"),
})

export default routes;