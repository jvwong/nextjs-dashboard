import { Pool } from 'pg';
import 'dotenv/config'

const connectionPool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

export default connectionPool;