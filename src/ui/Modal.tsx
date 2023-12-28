import { Contact } from "./contact/contact";

export const Modal = () => {
	return (
		<div className="fixed inset-0 z-10 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-800 bg-opacity-50">
			<div className="rounded-md border bg-white p-8 shadow-lg sm:w-[400px]">
				<Contact />
			</div>
		</div>
	);
};
