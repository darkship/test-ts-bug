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

export interface DMergedRenderContent {
  id: string;
  contentPath: string;
  meshXOR: string;
  materialXOR: string;
  renderBatchId: string | null;
  productVersionId: string;
}

export const a = async (defaultConnection: Knex) => {
  return await defaultConnection(TABLE).select<DMergedRenderContent[]>(FIELDS);
};

export const c = async () => {
  const b = await a(knex({}));
};
