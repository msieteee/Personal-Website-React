import { schema } from "@/lib/schema";
import { graphql } from "graphql";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const result = await graphql({
    schema,
    source: body.query,
    variableValues: body.variables,
  });

  return NextResponse.json(result);
}
