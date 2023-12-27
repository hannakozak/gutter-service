"use client";

import { sendEmail } from "@/utils/send-email";

export type FormData = {
	name: string;
	email: string;
	message: string;
};
export const Contact = () => {
	async function handleSubmit(event: React.SyntheticEvent) {
		event.preventDefault();

		const target = event.target as typeof event.target & {
			name: { value: string };
			email: { value: string };
			message: { value: string };
		};
		const data = {
			name: String(target.name.value),
			email: String(target.email.value),
			message: String(target.message.value),
		};

		sendEmail(data);
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
