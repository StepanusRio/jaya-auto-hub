import { currentRole } from "@/lib/auth";
import { db } from "@/lib/db";
import { CategoriesSchema } from "@/schemas";
import { StatusCodes } from "http-status-codes";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const value = await req.json();
  const validatedField = CategoriesSchema.safeParse(value);
  if (!validatedField.success) {
    return new NextResponse("Invalid Filed", {
      status: StatusCodes.BAD_REQUEST
    })
  }
  const { label } = validatedField.data;
  const role = await currentRole();
  if (role !== "ADMIN") {
    return new NextResponse("Forbidden! You don't have access for this route", { status: StatusCodes.FORBIDDEN })
  }
  const existingLabel = await db.categories.findFirst({
    where: {
      label
    }
  })
  if (existingLabel) {
    return new NextResponse("Duplicated Values try another values", {
      status: StatusCodes.BAD_REQUEST
    })
  }
  try {
    const response = await db.categories.create({
      data: {
        label
      }
    })
    return NextResponse.json({
      status: StatusCodes.CREATED,
      data: response
    })
  } catch (error) {
    console.error("[POST_API_CATEGORIES_ERROR]", error)
    return new NextResponse("Internal Server Error", {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
}

export async function GET(req: Request) {
  try {
    const response = await db.categories.findMany();
    return NextResponse.json({
      status: StatusCodes.OK,
      data: response
    })
  } catch (error) {
    console.error("[GET_API_CATEGORIES_ERROR]", error)
    return new NextResponse("Internal Server Error", {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
}