const { sql } = require("drizzle-orm");

const {
  integer,
  pgTable,
  serial,
  varchar,
  timestamp,
} = require("drizzle-orm/pg-core");

const users = pgTable("users", {
  id: serial("id").primaryKey(),

  name: varchar("name", { length: 256 }),

  email: varchar("email", { length: 256 }),

  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
});

const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  price: integer("price"),
  brand: varchar("brand", { length: 256 }),
  userId: integer("user_id"),
});

module.exports = {
  users,

  products,
};
