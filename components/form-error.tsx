import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
	  message?: string;
}

export default function FormError({ message }: FormErrorProps) {
	if(!message) return null;
	
	  return (
		      <div className="flex items-center bg-destructive/15 p-3 rounded-md gap-x-2 text-sm text-destructive">
		        <ExclamationTriangleIcon />
		        <p>{message}</p>
		      </div>
		    );
}