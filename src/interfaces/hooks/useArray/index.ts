import { PropsWithChildren, SetStateAction } from "react";

interface IUseArrayReturn {
	array: SetStateAction<IUseArrayReturn>;
	set: any;
	push: (element: any) => void;
	filter: (callback: any) => void;
	update: (index: number, newElement: any) => void;
	remove: (index: number) => void;
	clear: () => void;
}

export type IUseArray = (
	defaultValue: PropsWithChildren<IUseArray>
) => IUseArrayReturn;
