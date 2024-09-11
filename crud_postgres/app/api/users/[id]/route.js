import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    console.log(data);
    const { name, email } = data;
    const id = parseInt(params.id);
    const updateUser = await prisma.user.update({
      where: { id },
      data: {
        name,
        email,
      },
    });
    return NextResponse.json(updateUser);
  } catch (error) {
    console.log("Error Updating The user :", error);
    return NextResponse.error("Internal Server Error", 500);
  }
}

export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id);
    const deleteUser = await prisma.user.delete({
      where: { id },
    });
    return NextResponse.json(deleteUser);
  } catch (error) {
    console.error("Error Deleting users:", error);
    return NextResponse.error("Internal Server Error", 500);
  }
}
