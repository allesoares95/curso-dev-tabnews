import database from "infra/database.js";

async function status(request, response) {
  const updateAt = new Date().toISOString();

  const databaseVersion = await database.query("SHOW server_version");
  const postgresVersion = databaseVersion.rows[0].server_version;

  const connectionsMax = await database.query("SHOW max_connections");
  const maxConnections = connectionsMax.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;

  const connectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });

  const connectionsOpen = connectionsResult.rows[0].count;

  response.status(200).json({
    update_at: updateAt,
    dependecies: {
      database: {
        postgres_version: postgresVersion,
        max_connections: parseInt(maxConnections),
        open_connections: connectionsOpen,
      },
    },
  });
}

export default status;
