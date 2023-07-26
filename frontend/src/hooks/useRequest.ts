import { AxiosResponse } from 'axios';
import { useState } from 'react';

function useRequest() {
	const [loading, setLoading] = useState(false);

	const request = async (callback: () => Promise<AxiosResponse>) => {
		try {
			setLoading(true);
			const { data } =await callback();
			setLoading(false);
			return data;
		} catch (_) {
			setLoading(false);
			return null;
		}
	};

	return { request, loading };
}

export default useRequest;
