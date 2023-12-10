type FeedbackCardProps = {
	description: string;
	name: string;
	title: string;
	img: string;
};
export const FeedbackCard = ({ description }: FeedbackCardProps) => {
	return <div>{description}</div>;
};
