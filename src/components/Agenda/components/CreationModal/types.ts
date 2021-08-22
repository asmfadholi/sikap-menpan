export interface CreationModalInterface {
	visible: boolean;
	setVisible: (arg: boolean) => void;
	refetch?: any;
	mode: string;
	data?: any;
}
