import database from "infra/database.js";

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}
beforeAll(cleanDatabase);

test("POST to /api/v1/migrations should return 200", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });

  const response1Body = await response1.json();
  const migrationsName = response1Body.map((migrations) => migrations.name);
  const migrationsPath = response1Body.map((migrations) => migrations.path);

  expect(response1.status).toBe(201);
  expect(Array.isArray(response1Body)).toBe(true);
  expect(response1Body.length).toBeGreaterThan(0);
  expect(migrationsName).toContain("1727313126590_test-migrations");
  expect(migrationsPath).toContain(
    "infra/migrations/1727313126590_test-migrations.js",
  );

  const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  const response2Body = await response2.json();
  console.log(response2Body);

  expect(response2.status).toBe(200);
  expect(Array.isArray(response2Body)).toBe(true);
  expect(response2Body.length).toBe(0);
});
