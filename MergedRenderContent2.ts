import { Knex, knex } from "knex";

const TABLE = "table";

const FIELDS = {
  id: `${TABLE}.Id`,
  contentPath: `${TABLE}.ContentPath`,
  meshXOR: `${TABLE}.MeshXOR`,
  materialXOR: `${TABLE}.MaterialXOR`,
  renderBatchId: `${TABLE}.RenderBatchId`,
  productVersionId: `${TABLE}.ProductVersionId`,
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