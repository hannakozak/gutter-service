import Link from "next/link";
import { Contact } from "./contact/contact";

export const Modal = () => {
	return (
		<div className="fixed inset-0 z-10 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50">
			<div className="w-96 rounded-md border bg-white p-8 shadow-lg">
				<div className="text-center">
					<div className="mt-2 px-7 py-3">
						<div className="text-lg text-gray-500">
							<Contact />
						</div>
					</div>
					<div className="mt-4 flex justify-center">
						<Link
							href="/"
							className="rounded-md bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
						>
							Close
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
