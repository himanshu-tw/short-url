import { pgTable, text, timestamp, pgEnum, boolean } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  email: text('email').notNull().unique(),
  password: text('password'),
  isVerified: boolean('is_verified').notNull().default(false),
  verificationToken: text('verification_token'),
  verificationTokenExpiry: timestamp('verification_token_expiry'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const urls = pgTable('urls', {
    id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    userId: text('user_id').notNull().references(() => users.id),
    shortCode: text('short_code').notNull().unique(),
    originalUrl: text('original_url').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
})
