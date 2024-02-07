import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
	  message?: string;
}

export default function FormSuccess({ message }: FormSuccessProps) {
	  return (
		      <div className="flex items-center bg-emerald-500/15 p-3 rounded-md gap-x-2 text-sm text-emerald-500">
		        <CheckCircledIcon />
		        <p>{message}</p>
		      </div>
		    );
}