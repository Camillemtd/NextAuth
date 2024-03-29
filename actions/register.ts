"use server";

import * as z from "zod";
import bcrypt from "bcrypt";

import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
	const validatedField = RegisterSchema.safeParse(values);

	if(!validatedField.success) {
		return {error: "Invalid fileds"};
	}

	const {email, password, name} = validatedField.data
	const hashedPassword = await bcrypt.hash(password, 10);

	const existingUser = await getUserByEmail(email);

	if(existingUser) {
		return { error: "Email already exists" };
	}

	await db.user.create({
		data: {
			email,
			password: hashedPassword,
			name,
		}
	});

	//TODO: send veriiication email

	return {success: "User created!"};
}