import { Knex, knex } from "knex";

const TABLE = "table";

const FIELDS = {
  id: `${TABLE}.Id`,
  d: `${TABLE}.d`,
};

export interface Content {
  id: string;
}

export const a = async (defaultConnection: Knex) => {
  return await defaultConnection(TABLE).select<Content[]>(FIELDS);
};

export const c = async () => {
  const b = await a(knex({}));
};

type T = Awaited<ReturnType<typeof a>>

export const d :T = [{

}]