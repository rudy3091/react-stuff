import { useState, useEffect, useRef } from 'react';

export const useClick = (onClick) => {
	const element = useRef();
	useEffect(() => {
		if (element.current) {
			element.current.addEventListener("click", onClick);
		}
		return () => element.current.removeEventListener("click", onClick);
	}, []);

	if (typeof onClick !== "function") {
		return;
	}
	return element;
}
