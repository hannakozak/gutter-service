"use client";

import { type FormEvent } from "react";

export type FormData = {
	name: string;
	email: string;
	message: string;
};
export const Contact = () => {
	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);

		try {
			const response = await fetch("/api/email", {
				method: "post",
				body: formData,
			});

			if (!response.ok) {
				console.log("falling over");
				throw new Error(`response status: ${response.status}`);
			}
			const responseData = await response.json();
			console.log(responseData["message"]);

			alert("Message successfully sent");
		} catch (err) {
			console.error(err);
			alert("Error, please try resubmitting the form");
		}
	}
	return (
		<form onSubmit={handleSubmit}>
			<div className="my-4 flex w-full flex-col">
				<label className="font-bold text-gray-800" htmlFor="name">
					Name
				</label>
				<input
					type="text"
					minLength={3}
					maxLength={150}
					required
					className=" border border-gray-100 bg-gray-50 p-4 "
					autoComplete="off"
					id="name"
				/>
			</div>
			<div className="my-4 flex w-full flex-col">
				<label className="font-bold text-gray-800" htmlFor="email">
					Email
				</label>
				<input
					type="email"
					minLength={5}
					maxLength={150}
					required
					className=" border border-gray-100 bg-gray-50 p-4 "
					autoComplete="off"
					id="email"
				/>
			</div>
			<div>
				<label className="font-bold text-gray-800" htmlFor="message">
					Message
				</label>
				<textarea
					rows={4}
					required
					minLength={10}
					maxLength={500}
					name="message"
					className="w-full border border-gray-100 bg-gray-50 p-4 "
				/>
			</div>
			<button
				type="submit"
				className="mt-4 w-40 bg-gray-700 px-4 py-2 font-medium text-white disabled:bg-gray-400 disabled:text-gray-100"
			>
				Send Message
			</button>
		</form>
	);
};
