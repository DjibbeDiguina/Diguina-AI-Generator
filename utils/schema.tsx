import { varchar, pgTable, serial, text } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput', {
    id: serial('id').primaryKey(),
    formData: text('formData').notNull(),
    aiResponse: text('aiResponse'),
    templateSlug: varchar('templateSlug').notNull(),
    createBy: varchar('createBy').notNull(),
    createAt: varchar('createAt'),
})